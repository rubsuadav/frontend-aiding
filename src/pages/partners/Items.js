import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Table, Button, Input, Space} from 'antd';
import ButtonR from "react-bootstrap/Button";
import { useRef, useState, useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import partnersApi from "./services/backend.js";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {Modal} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Form from "react-bootstrap/Form";
/*DATOS DE LA TABLA*/
/*
var data = [
  {
    key: '1',
    dni: '12345678A',
    nombre: 'John',
    apellidos: 'Brown',
    email: 'john@email.com',
    reg: 'true',
  },
  {
    key: '2',
    dni: '12345678A',
    nombre: 'Jim',
    apellidos: 'Brown',
    email: 'jim@email.com',
    reg: 'true',
  },
  {
    key: '3',
    dni: '12345678A',
    nombre: 'Adala',
    apellidos: 'Brown',
    email: 'adala@email.com',
    reg: 'true',
  },
  {
    key: '4',
    dni: '12345678A',
    nombre: 'John',
    apellidos: 'Brown',
    email: 'john@email.com',
    reg: 'true',
  },
];*/



const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};



const Partners = () => {
  let navigate = useNavigate();

  /*BUSCADOR*/
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined style={{
              alignItems: 'center',
              display: 'inline-grid',
            }}/>}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#FA9494' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#FA9494',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'Nº de socio',
      dataIndex: 'id',
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
    },
    {
      title: 'DNI',
      dataIndex: 'dni',
      ...getColumnSearchProps('dni'),
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Apellidos',
      dataIndex: 'last_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Registro Donación',
      dataIndex: 'state',
      filters: [
        {
          text: 'Activo',
          value: 'Activo',
        },
        {
          text: 'Inactivo',
          value: 'Inactivo',
        },
      ],
      onFilter: (value, record) => record.state.includes(value),
      width: '30%',
    },
  ];

  /*DATOS*/
  const [partners_data, setPartnersData] = React.useState([
    {
      id: '...',
      dni: '...',
      name: '...',
      last_name: '...',
      email: '...',
      state: '...',
    }
  ]);

  useEffect(() => {
    const getPartnersData = partnersApi.get().then((response) => {setPartnersData(response.data);});
  }, []);

  function createPartnerRedirect(){
    navigate("/partners/create");
  }
  
  const body = (
    <div id='modal-partner' align = 'center'>
      <div id='modal-partner-content'>
        <div>
          <h2> Importar socios </h2>
        </div>
        <Form className="">
          <Form.Group>
            <div id="modal-partner-content">
              <input id="input-file" type="file" class="custom-file-input" />
            </div>
          </Form.Group>
          <div id='modal-button-right'>
              <ButtonR variant="outline-success" className="col mb-4 mx-5" type="submit"> Importar </ButtonR>
          </div>
          
        </Form>
        <div id='modal-button-left'>
          <ButtonR variant="outline-danger" className="col mb-4 mx-5" onClick={()=>openCloseModal()}> Cancelar </ButtonR>
        </div>
        
      </div>
    </div>
  )

  const [modal, setModal] = useState(false);

  const openCloseModal = () => {
    setModal(!modal);
  }

  return (
    <div className='container my-5'>
        <h1 className="pt-3">Socios</h1>
        <div id="botones-socios">
          <Button onClick={createPartnerRedirect} id="boton-socio">Crear socio</Button>
          <Button onClick={()=>openCloseModal()} id="boton-importar" >Importar socios</Button>
        </div>

        <Modal id = 'modal-container' open = {modal} onClose = {openCloseModal}>
          {body}
        </Modal>

        <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              navigate("/partners/" + record.id);
            },
          };
        }}
        columns={columns} dataSource={partners_data} onChange={onChange} scroll={{y: 400,}} pagination={{pageSize: 20,}}/>
    </div>
  );
}

export default Partners;
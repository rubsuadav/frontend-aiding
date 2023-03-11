import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Table, Button, Input, Space} from 'antd';
import { useRef, useState, useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import partnersApi from "./services/backend.js";
import { useNavigate } from "react-router-dom";

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const Communication = ({user_id}) =>{

  let navigate = useNavigate();

  /**Establecer las comunicaciones */
  const [communications_data, setCommunications] = React.useState([
      {
          date: "",
          communication_type: "",
          description: "",
      }
      ]);

  useEffect(() => {
    const getCommunications = partnersApi.get(`/${user_id}/communication/`).then((response) => {setCommunications(response.data);}); 
  }, []);

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
          color: filtered ? '#678edf' : undefined,
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
            backgroundColor: '#678edf',
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
      title: 'Fecha',
      dataIndex: 'date',
      ...getColumnSearchProps('date'),
    },
    {
      title: 'Tipo de comunicación',
      dataIndex: 'communication_type',
      filters: [
        {
          text: 'TELEFÓNICA',
          value: 'TELEFÓNICA',
        },
        {
          text: 'TELEMÁTICA',
          value: 'TELEMÁTICA',
        },
        {
          text: 'PERSONAL',
          value: 'PERSONAL',
        },
        {
          text: 'EMAIL',
          value: 'EMAIL',
        },
      ],
      onFilter: (value, record) => record.communication_type.includes(value),
      width: '30%',
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      ...getColumnSearchProps('description'),
    },
  ];

  return (
    <div className='container my-5'>
        <Table 
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              navigate("/partners/" + user_id + "/communication/update/" + record.id);
            },
          };
        }}
        
        columns={columns} dataSource={communications_data} onChange={onChange} scroll={{y: 400,}} pagination={{pageSize: 6,}}/>
    </div>
  );
}

export default Communication;
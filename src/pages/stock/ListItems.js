import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import ButtonR from "react-bootstrap/Button";
import { Table, Button, Input, Space, Tag } from "antd";
import { useRef, useState, useEffect } from "react";
import Highlighter from "react-highlight-words";
import { items, tiposBE} from "./services/backend.js";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Items = () => {
  let navigate = useNavigate();

  /*BUSCADOR*/
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
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
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={
              <SearchOutlined
                style={{
                  alignItems: "center",
                  display: "inline-grid",
                }}
              />
            }
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
          color: filtered ? "#678edf" : undefined,
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
            backgroundColor: "#678edf",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Cantidad',
      dataIndex: 'quantity',
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
    },
    {
      title: 'Tipo de Item',
      dataIndex: 'type_id',
      render: (typeId) => getTypeName(typeId),
    },
  ];

  function getTypeName(typeId) {
    const type = types.find((t) => t.id === typeId);
    return type ? type.name : '';
  }

  const [types, setTypes] = React.useState([]);

  function getTipos() {
    tiposBE
      .get("")
      .then((response) => {
        setTypes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getTipos();
  }, []);

  /*DATOS*/
  const [items_data, setItemsData] = React.useState([
    {
      name: '...',
      quantity: '...',
      description: '...',
      type: '...',
    }
  ]);

  useEffect(() => {
    items.get().then((response) => {setItemsData(response.data);});
  }, []);

  function createItemRedirect(){
    navigate("/admin/stock/items/create");
  }

  return (
    <div className='container my-5'>
        <h1 className="pt-3">Items</h1>

        <MDBRow className='g-0'>
          <MDBCol md='2'>
          <Button onClick={createItemRedirect} id="boton-socio">Crear nuevo ítem</Button>
          </MDBCol>
        </MDBRow>
        <br></br>
        <Table id='table'
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              navigate("/admin/stock/items/" + record.id);
            },
          };
        }}
        columns={columns} dataSource={items_data} onChange={onChange} scroll={{y: 400,}} pagination={{pageSize: 20,}}/>
    </div>
  );
}

export default Items;
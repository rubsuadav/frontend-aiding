import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Table, Button, Input, Space } from "antd";
import { useRef, useState, useEffect } from "react";
import Highlighter from "react-highlight-words";
import resourcesApi from "./services/backend.js";
import { useNavigate } from "react-router-dom";

/*DATOS DE LA TABLA*/

/* var data2 = [
  {
    key: "1",
    title: "tituloooo",
    description: "descripcionnn",
    street: "er Brown",
    number: "4",
    city: "pepi",
    additionals_comments: "estomismo",
  },
  {
    key: "2",
    title: "tituloooo",
    description: "descripcionnn",
    street: "er Brown",
    number: "4",
    city: "pepi",
    additionals_comments: "estomismo",
  },
  {
    key: "3",
    title: "tituloooo",
    description: "descripcionnn",
    street: "er Brown",
    number: "4",
    city: "pepi",
    additionals_comments: "estomismo",
  },
  {
    key: "4",
    title: "tituloooo",
    description: "descripcionnn",
    street: "er Brown",
    number: "4",
    city: "pepi",
    additionals_comments: "estomismo",
  },
  {
    key: "5",
    title: "tituloooo",
    description: "descripcionnn",
    street: "er Brown",
    number: "4",
    city: "pepi",
    additionals_comments: "estomismo",
  },
  {
    key: "6",
    title: "tituloooo",
    description: "descripcionnn",
    street: "er Brown",
    number: "4",
    city: "pepi",
    additionals_comments: "estomismo",
  },
  {
    key: "7",
    title: "tituloooo",
    description: "descripcionnn",
    street: "er Brown",
    number: "4",
    city: "pepi",
    additionals_comments: "estomismo",
  },
]; */

const ResourcesTable = () => {
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
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Buscar
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Resetear
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
            Filtrar
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
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
            backgroundColor: "#ffc069",
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

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const columns = [
    {
      title: "Nº de recurso",
      dataIndex: "id",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
    },
    {
      title: "Título",
      dataIndex: "title",
      ...getColumnSearchProps("title"),
    },
    {
      title: "Descripción",
      dataIndex: "description",
      ...getColumnSearchProps("description"),
    },
    {
      title: "Calle",
      dataIndex: "street",
    },
    {
      title: "Número",
      dataIndex: "number",
    },
    {
      title: "Ciudad",
      dataIndex: "city",
    },
    {
      title: "Comentarios adicionales",
      dataIndex: "additionals_comments",
    },
  ];

  /*DATOS*/
  const [resources_data, setResourceData] = React.useState([
    {
      id: "...",
      title: "...",
      description: "...",
      street: "...",
      number: "...",
      city: "...",
      additionals_comments: "...",
    },
  ]);

  useEffect(() => {
    const getResourceData = resourcesApi.get().then((response) => {
      setResourceData(response.data);
    });
    console.log(resourcesApi.get());
  }, []);

  return (
    <div className="container">
      <h1>Recursos</h1>
      <Button onClick={() => {navigate("/information/create-resource")}} id="boton-socio">Crear recurso</Button>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              navigate("/information/resources/" + record.id);
            },
          };
        }}
        columns={columns}
        dataSource={resources_data}
        onChange={onChange}
        scroll={{ y: 800 }}
        pagination={{ pageSize: 4 }}
      />
    </div>
  );
};

export default ResourcesTable;

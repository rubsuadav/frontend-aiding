import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Table, Button, Input, Space } from "antd";
import { useRef, useState, useEffect } from "react";
import Highlighter from "react-highlight-words";
import { advertisementBE } from "./services/backend.js";
import { useNavigate } from "react-router-dom";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const AdminListAdvertisement = () => {
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
            Buscar
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Borrar
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
      title: "Título",
      dataIndex: "title",
      ...getColumnSearchProps("title"),
    },
    {
      title: "Sección",
      dataIndex: "section_id__name",
      ...getColumnSearchProps("section_id__name"),
    },
    {
      title: "Fecha de creación",
      dataIndex: "creation_date",
      sorter: {
        compare: (a, b) => compareDates(a.creation_date, b.creation_date) ,
        multiple: 1,
      },
    },
  ];

  /*DATOS*/
  const [advertisements, setAdvertisements] = React.useState([
    {
      title: "",
      abstract: "",
      url: "",
      section: "",
      creation_date: "",
      front_page: "default.jpg",
    },
  ]);

  useEffect(() => {
    advertisementBE.get().then((response) => {
      setAdvertisements(response.data);
    console.log(response.data);
    });
  }, []);

  return (
    <div className="container my-5">
      <h1 className="pt-3">Artículos</h1>
      <Button
        onClick={() => {
          navigate("/admin/information/advertisements/create");
        }}
        id="boton-socio"
      >
        Crear artículo
      </Button>
      <Table
        onRow={(record) => {
          return {
            onClick: () => {
              navigate("/information/advertisements/" + record.id);
            },
          };
        }}
        columns={columns}
        dataSource={advertisements}
        onChange={onChange}
        scroll={{ y: 400 }}
        pagination={{ pageSize: 20 }}
      />
    </div>
  );
};

export default AdminListAdvertisement;


function compareDates(dateString1, dateString2) {
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);
  
    if (date1 < date2) {
      return -1;
    } else if (date1 > date2) {
      return 1;
    } else {
      return 0;
    }
  }
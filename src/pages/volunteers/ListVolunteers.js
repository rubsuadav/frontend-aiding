import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Table, Button, Input, Space, Tag } from "antd";
import { useRef, useState, useEffect } from "react";
import Highlighter from "react-highlight-words";
import { useNavigate } from "react-router-dom";
import { volunteers } from "./services/backend.js";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { useNotificationContext } from "../../components/notificationContext.js";

const Volunteers = () => {
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
      title: "ID del Voluntario",
      dataIndex: "num_volunteer",
      ...getColumnSearchProps("num_volunteer"),
    },
    {
      title: "NIF",
      dataIndex: "nif",
      ...getColumnSearchProps("nif"),
    },
    {
      title: "Nombre",
      dataIndex: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Apellidos",
      dataIndex: "last_name",
      ...getColumnSearchProps("last_name"),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Estado",
      dataIndex: "state",
      filters: [
        {
          text: "Activo",
          value: "Activo",
        },
        {
          text: "Inactivo",
          value: "Inactivo",
        },
      ],
      onFilter: (value, record) => record.state.includes(value),
      render: (state) => (
        <Tag color={state === "Activo" ? "green" : "red"} key={state}>
          {state.toUpperCase()}
        </Tag>
      ),
    },
  ];

  /*DATOS*/
  const [volunteers_data, setVolunteersData] = React.useState([
    {
      num_volunteer: "...",
      nif: "...",
      name: "...",
      last_name: "...",
      email: "...",
      state: "...",
    },
  ]);

  useEffect(() => {
    volunteers.get().then((response) => {
      setVolunteersData(response.data);
      setFilteredVol(response.data);
    });
  }, []);

  function createVolunteerRedirect() {
    navigate("/admin/volunteers/create");
  }

  /* NOTIFICATIONS */

  const { setFilteredEmails } = useNotificationContext();

  function notifyVol() {
    let emails_aux = filteredVol.map((obj) => obj.email).join(" ");
    setFilteredEmails(emails_aux);
    navigate("/admin/notification/create");
  }

  const [filteredVol, setFilteredVol] = useState([
    {
      num_volunteer: "...",
      nif: "...",
      name: "...",
      last_name: "...",
      email: "...",
      state: "...",
    },
  ]);

  const onChange = (pagination, filters, sorter, extra) => {
    setFilteredVol(extra.currentDataSource);
  };

  return (
    <div className="container my-5">
      <h1 className="pt-3">Voluntarios</h1>
      <Row className="g-0 justify-content-between">
        <Col md="auto">
          <Button onClick={createVolunteerRedirect} id="boton-socio">
            Crear voluntario
          </Button>
        </Col>
        <Col md="auto">
          <Button id="boton-importar" onClick={() => notifyVol()}>
            Notificar voluntarios seleccionados
          </Button>
        </Col>
      </Row>
      <br></br>
      <Table
        id="table"
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              navigate("/admin/volunteers/" + record.id);
            },
          };
        }}
        columns={columns}
        dataSource={volunteers_data}
        onChange={onChange}
        scroll={{ y: 400 }}
        pagination={{ pageSize: 20 }}
      />
    </div>
  );
};

export default Volunteers;

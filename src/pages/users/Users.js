import React, { useEffect } from "react";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import usersApi from "./services/backend.js";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Users = () => {
  let navigate = useNavigate();


   // DATOS
   const [users, setUsersData] = React.useState([
    {
      id: "...",
      username: "...",
      is_admin: "...",
    },
  ]);

  const columns = [
    {
      title: "Id de usuario",
      dataIndex: "id",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
      render: (id) => {
        return <div onClick={() => navigate("/verUsuario/" + id)}>{id}</div>;
      },
    },
    {
      title: "Nombre de usuario",
      dataIndex: "username",
    },
    {
      title: "Rol del usuario",
      dataIndex: 'is_admin',
      render:(is_admin) => is_admin ? 'ADMINISTRADOR' : 'USUARIO',
    },
  ];
  

  useEffect(() => {
    const getUsersData = usersApi.get().then((response) => {
      setUsersData(response.data);
    });
  }, []);

  // Navigate del botón de crear user
  function createUserRedirect() {
    navigate("/crearUsuario");
  }

  return (
    <div className="container my-5">
      <h1 className="pt-3">Usuarios</h1>
      <Button
        onClick={createUserRedirect}
        id="boton-usuario"
        style={{ float: "left" }}
      >
        Crear usuario
      </Button>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              navigate("/verUsuario/" + record.id);
            },
          };
        }}
        columns={columns}
        dataSource={users}
        onChange={onChange}
        scroll={{ y: 400 }}
        pagination={{ pageSize: 20 }}
      />
    </div>
  );
};

export default Users;

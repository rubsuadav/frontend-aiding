import React, { useEffect } from "react";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { base, rolesBE } from "./services/backend.js";

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
      roles_id: "",
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
    },
    {
      title: "Nombre de usuario",
      dataIndex: "username",
    },
    {
      title: "Administrador/Usuario",
      dataIndex: 'is_admin',
      render:(is_admin) => is_admin ? 'ADMINISTRADOR' : 'USUARIO',
    },
    /* {
      title: 'Rol del usuario',
      dataIndex: 'roles_id',
      render: (rolesId) => getRoleName(rolesId),
    }, */
  ];

  function getRoleName(rolesId) {
    const role = roles.find((t) => t.id === rolesId);
    return role ? role.name : '';
  }

  const [roles, setRoles] = React.useState([]);

  function getRoles() {
    rolesBE
      .get("")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const getUsersData = base.get("users/").then((response) => {
      setUsersData(response.data);
    });
    getRoles();
  }, []);

  // Navigate del botón de crear user
  function createUserRedirect() {
    navigate("/admin/base/users/crearUsuario");
  }

  return (
    <div className="container my-5">
      <h1 className="pt-3">Usuarios</h1>
      <Button
        onClick={createUserRedirect}
        id="boton-socio"
        style={{ float: "left" }}
      >
        Crear usuario
      </Button>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              navigate("/admin/base/users/verUsuario/" + record.id);
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

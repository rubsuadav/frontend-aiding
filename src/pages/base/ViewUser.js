import React, { useState, useEffect } from "react";
import { base, rolesBE } from "./services/backend.js";
import swal from "sweetalert";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ViewUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({});
  const { id } = useParams();

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

  function getRoleName(rolesId) {
    const role = roles.find((t) => t.id === rolesId);
    return role ? role.name : '';
  }

  useEffect(() => {
    getUserById(id);
    getRoles();
  }, []);

  const getUserById = async (id) => {
    try {
      const response = await base.get(`/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-5 shadow">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="row mb-3 mt-3">
            <div className="col-md-6 text-end fw-bold">
              <label htmlFor="username" className="form-label" >
                Nombre de usuario:
              </label>
            </div>
            <div className="col-md-6">
              <label id="username">{user.username}</label>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6 text-end fw-bold">
              <label htmlFor="is_admin" className="form-label">
                Administrador:
              </label>
            </div>
            <div className="col-md-6">
              <label id="is_admin">{user.is_admin ? "Sí" : "No"}</label>
            </div>
          </div>
          {/*<div className="row mb-3">
            <div className="col-md-6 text-end fw-bold">
              <label htmlFor="roles_id" className="form-label">
                Rol:
              </label>
            </div>
            <div className="col-md-6">
              <label id="roles_id">{getRoleName(user.roles_id)}</label>
            </div>
          </div>*/}
        </div>
      </div>

      <div className="row justify-content-evenly">
        <Button
          className="col mb-4 mx-5 btn btn-light w-100"
          onClick={() => navigate("/admin/base/users")}
          id="button"
        >
          Volver a la lista de usuarios
        </Button>
        <Button
          className="col mb-4 mx-5 btn btn-light w-100"
          onClick={() => navigate("/admin/base/users/editarUsuario/" + id)}
          id="button"
        >
          Editar
        </Button>
      </div>
    </div>
  );
}

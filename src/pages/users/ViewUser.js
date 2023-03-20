import React, { useState, useEffect } from "react";
import userApi from "./services/backend.js";
import swal from "sweetalert";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ViewUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getUserById(id);
  }, []);

  const getUserById = async (id) => {
    try {
      const response = await userApi.get(`/${id}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const successMsg = {
    title: "Mensaje de confirmación",
    text: "Te confirmamos que el recurso se ha borrado correctamente",
    icon: "success",
    button: "Aceptar",
    timer: "5000",
  };

  const errorMsg = {
    title: "Mensaje de error",
    text: "Se ha producido un error al borrar el recurso",
    icon: "error",
    button: "Aceptar",
    timer: "5000",
  };

  const deleteUser = async () => {
    const result = await userApi
      .delete(`/${id}`)
      .then((res) => {
        swal(successMsg);
        navigate("/users");
      })
      .catch((err) => {
        swal(errorMsg);
      });
  };

  const deleteConfirmationAlert = async () => {
    swal({
      title: "Eliminar usuario",
      text: "¿Estás seguro que desea eliminar el usuario?",
      icon: "warning",
      buttons: ["No", "Sí"],
    }).then((res) => {
      if (res) {
        deleteUser();
      }
    });
  };

  return (
    <div className="container my-5 shadow">
      <h1 className="pt-3">Ver usuario</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="row mb-3">
            <div className="col-md-6 text-end fw-bold">
              <label htmlFor="username" className="form-label">
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
        </div>
      </div>

      <div className="row justify-content-evenly">
        <Button
          className="col mb-4 mx-5"
          variant="outline-primary"
          onClick={() => navigate("/users")}
        >
          Volver a la lista de usuarios
        </Button>
        <Button
          className="col mb-4 mx-5"
          variant="outline-primary"
          onClick={() => navigate("/editarUsuario/" + id)}
        >
          Editar
        </Button>
        <Button
          className="col mb-4 mx-5"
          variant="outline-primary"
          onClick={() => {
            deleteConfirmationAlert();
          }}
          type="button"
          // className="btn btn-danger w-100"
        >
          Eliminar
        </Button>
      </div>
    </div>
  );
}

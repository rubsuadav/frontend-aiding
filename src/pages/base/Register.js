import React from "react";
import { base } from "./services/backend.js";
import { backendUrl } from "../../config.js";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";

const successMsg = {
  title: "Mensaje de confirmación",
  text: "El registro se ha completado con éxito, inicie sesión con sus credenciales",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
};

const errorMsg = {
  title: "Mensaje de error",
  text: "Se ha producido un error al registrarse",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
};

export default function CreateUser() {
  let navigate = useNavigate();

  /* Validator */
  const [errors, setErrors] = useState({});

  function validateForm() {
    let error_msgs = {};

    if (username === "" || username === null) {
      error_msgs.username = "Introduzca un usuario";
    }

    if (password === "" || password === null) {
      error_msgs.password = "Introduzca una contraseña";
    }

    if (password2 === "" || password2 === null) {
      error_msgs.password = "Vuelva a introducir una contraseña";
    }

    if (password !== password2) {
      error_msgs.password = "Las contraseñas no coinciden";
    }

    setErrors(error_msgs);

    if (Object.keys(error_msgs).length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function postUser(user) {
    if (!validateForm()) return;

    base
      .post("register/", user)
      .then(async () => {
        swal(successMsg);
        navigate("/base/login");
      })
      .catch((error) => {
        if (error.response === undefined) {
          swal("Error", "Ha ocurrido un error al registar", "error");
        } else {
          switch (error.response.status) {
            case 409:
              setErrors({
                register:
                  "Compruebe los datos de entrada, el usuario puede que exista en el sistema",
              });
              break;
            default:
              swal("Error", "Ha ocurrido un error al registar", "error");
              break;
          }
        }
      });
  }

  const [user, setUser] = useState({
    username: "",
    password: "",
    password2: "",
  });

  const { username, password, password2 } = user;

  useEffect(() => {}, []);

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    postUser(user);
  };

  return (
    <div className="container my-5 shadow">
      <h1 className="pt-3">Registrarse</h1>
      {errors.register && <p className="text-danger">{errors.register}</p>}
      <Form className="" onSubmit={(e) => onSubmit(e)}>
        <div className="row justify-content-evenly">
          <div className="col-md-12">
            <Form.Group className="mb-3">
              <Form.Label>Nombre de usuario:</Form.Label>
              {errors.username && (
                <p className="text-danger">{errors.username}</p>
              )}
              <Form.Control
                onChange={(e) => onInputChange(e)}
                value={username}
                name="username"
                placeholder="Nombre del usuario"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}
              <Form.Control
                onChange={(e) => onInputChange(e)}
                value={password}
                type="password"
                name="password"
                placeholder="Contraseña"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Repetir contraseña</Form.Label>
              <Form.Control
                onChange={(e) => onInputChange(e)}
                value={password2}
                type="password"
                name="password2"
                placeholder="Repetir contraseña"
              />
            </Form.Group>
          </div>
        </div>

        <div className="row justify-content-evenly">
          <Button
            className="col mb-4 mx-5"
            variant="outline-success"
            type="submit"
          >
            Registrar
          </Button>
        </div>
      </Form>
    </div>
  );
}

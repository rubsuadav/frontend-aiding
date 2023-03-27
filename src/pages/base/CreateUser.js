import React from "react";
import { base } from "./services/backend.js";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

const successMsg = {
  title: "Mensaje de confirmación",
  text: "El usuario se ha creado correctamente",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
};

const errorMsg = {
  title: "Mensaje de error",
  text: "Se ha producido un error al crear el usuario",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
};

export default function CreateUser() {
  let navigate = useNavigate();

  function postUser(user) {
    const aux = base
      .post("users/", user)
      .then((response) => {
        console.log(response);
        swal(successMsg);
        navigate("/admin/base/users");
      })
      .catch((error) => {
        console.log(error);
        swal(errorMsg);
      });
  }

  const [user, setUser] = useState({
    username: "",
    password: "",
    is_admin: "",
  });

  const { username, password, is_admin } = user;

  const onInputChange = (e) => {
    if (e.target.name === "is_admin") {
      setUser({ ...user, [e.target.name]: e.target.checked });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    postUser(user);
  };

  return (
    <div className="container my-5 shadow">
      <h1 className="pt-3">Crear usuario</h1>
      
      <Form className="" onSubmit={(e) => onSubmit(e)}>
          <div className="row justify-content-evenly">
            <div className="col-md-12">
              <Form.Group className="mb-3">
                <Form.Label>Nombre de usuario:</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={username}
                  name="username"
                  placeholder="Nombre del usuario"
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={password}
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Administrador</Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  name="is_admin"
                  checked={is_admin}
                  onChange={(e) => onInputChange(e)}
                />
              </Form.Group>
            </div>
          </div>
  
          <div className="row justify-content-evenly">
            <Button className="col mb-4 mx-5" variant="outline-success" type="submit">
              Guardar usuario
            </Button>
          </div>
        </Form>
    </div>
  );
}

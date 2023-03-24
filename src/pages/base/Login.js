import React, { useState } from "react";
import { useAuthContext } from "../../components/routes/authContext";
import { useNavigate } from "react-router-dom";

import { Form, Button } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";

import {backendUrl} from "../../config";

export default function Login() {
  const { login } = useAuthContext();
  let navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = form;

  function onInputChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post(`${backendUrl}token/`, { username, password }).then((response) => {
      console.log(response.data);
      login(response.data);
      swal("Bienvenido", "Has iniciado sesión correctamente", "success");
      navigate("/");
    });
  }

  return (
    <div className="container my-5 shadow">
      <h1 className="pt-3">Inicio de Sesión</h1>
      <Form className="" onSubmit={(e) => handleSubmit(e)}>
        <div className="row justify-content-evenly">
          <div className="col-md-6">
            <Form.Group className="mb-3">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                onChange={(e) => onInputChange(e)}
                value={username}
                name="username"
                placeholder="Introduzca su usuario"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                onChange={(e) => onInputChange(e)}
                value={password}
                name="password"
                type="password"
                placeholder="Introduzca su contraseña"
              />
            </Form.Group>
          </div>
        </div>

        <div className="row justify-content-evenly">
          <Button className="col-md-6" variant="outline-success" type="submit">
            Iniciar Sesión
          </Button>
        </div>
        <br></br>
        <a>¿Ha olvidado su contraseña?</a>
        <br></br>
        <a>
          Contacte con atención al cliente mediante el correo:
          AidingSevilla@outlook.es
        </a>
      </Form>
    </div>
  );
}

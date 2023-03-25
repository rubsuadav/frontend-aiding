import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// React Bootstrap imports
import { Form, Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

// Local imports
import { useAuthContext } from "../../components/routes/authContext";
import { backendUrl } from "../../config";

export default function Login() {
  const { login } = useAuthContext();
  let navigate = useNavigate();

  /* Data */
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = form;
  const [loading, setLoading] = useState(false);

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

    setErrors(error_msgs);

    if (Object.keys(error_msgs).length === 0) {
      return true;
    } else {
      return false;
    }
  }

  /* Functions */
  function onInputChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    axios
      .post(`${backendUrl}token/`, { username, password })
      .then((response) => {
        console.log(response.data);
        login(response.data);
        swal("Bienvenido", "Has iniciado sesión correctamente", "success");
        navigate("/");
      })
      .catch((error) => {
        if (error.response === undefined) {
          swal("Error", "Ha ocurrido un error al iniciar sesión", "error");
        } else {
          switch (error.response.status) {
            case 401:
              setErrors({ login: "Usuario o contraseña incorrectos" });
              break;
            default:
              swal("Error", "Ha ocurrido un error al iniciar sesión", "error");
              break;
          }
        }

        setLoading(false);
      });
  }

  return (
    <div className="container my-5 shadow">
      <h1 className="pt-3">Inicio de Sesión</h1>
      {errors.login && <p className="text-danger">{errors.login}</p>}
      <Form className="" onSubmit={(e) => handleSubmit(e)}>
        <div className="row justify-content-evenly">
          <div className="col-md-6">
            <Form.Group className="mb-3">
              <Form.Label>Usuario</Form.Label>
              {errors.username && (
                <p className="text-danger">{errors.username}</p>
              )}
              <Form.Control
                onChange={(e) => onInputChange(e)}
                value={username}
                name="username"
                placeholder="Introduzca su usuario"
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
                name="password"
                type="password"
                placeholder="Introduzca su contraseña"
              />
            </Form.Group>
          </div>
        </div>

        <div className="row justify-content-evenly">
          <Button className="col-md-6" variant="outline-success" type="submit">
            {loading && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
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

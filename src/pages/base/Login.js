import React from "react";
import {base} from "./services/backend.js";
import swal from 'sweetalert';
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";


const successMsg = {
  title: "Mensaje de confirmación",
  text: "Usuario y contraseña correctos",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
}

const errorMsg = {
  title: "Mensaje de error",
  text: "Usuario o contraseña incorrectos",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
}

function Login() {
    let navigate = useNavigate();

    const { id } = useParams();

    function postLogin(){
      console.log(user)
        const aux = base.post(`/login/`,user).then((response) => {
            console.log(response);
            swal(successMsg);
            navigate(`/viewUser/${id}`);
        }).catch((error) => {
            console.log(error);
            swal(errorMsg);
        });
    };

    const [user, setUser] = useState({
      username: "",
      password: "",
    });
  
    const {
      username,
      password,
    } = user;
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      postLogin(user);
    };
  
    return (
      <div className="container my-5 shadow">
        <h1 className="pt-3">Inicio de Sesión</h1>
        <Form className="" onSubmit={(e) => onSubmit(e)}>
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
          <a>Contacte con atención al cliente mediante el correo: AidingSevilla@outlook.es</a>
        </Form>
      </div>
    );
  }

export default Login;
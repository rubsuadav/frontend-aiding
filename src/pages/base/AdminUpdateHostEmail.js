import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { base } from "./services/backend.js";
import swal from 'sweetalert';

const successMsg = {
  title: "Mensaje de confirmación",
  text: "La dirección de correo electrónico se ha actualizado correctamente",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
}

const errorMsg = {
  title: "Mensaje de error",
  text: "Se ha producido un error al actualizar la dirección de correo electrónico",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
}

export default function UpdateHostEmail() {
  const navigate = useNavigate();

  const [hostEmail, setHostEmail] = useState({
    email: "",
    password: "",
  });

  const {email, password } = hostEmail;

  useEffect(() => {
    const fetchHostEmail = async () => {
      const response = await base.get(`hostEmail/`);
      setHostEmail(response.data);
    };
    fetchHostEmail();
  });

  const onInputChange = (e) => {
    if (e.target.name === "is_admin") {
      setHostEmail({ ...hostEmail, [e.target.name]: e.target.checked });
    } else {
      setHostEmail({ ...hostEmail, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validateForm()) {
        await base.put(`/hostEmail/`, hostEmail);
        swal(successMsg);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      swal(errorMsg);
    }
  };
  const [errors, setErrors] = useState({});

  function validateEmail(email) {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  }

  function validateForm() {
    let error_msgs = {};

    if (email === "" || email === null) {
      error_msgs.email = "El email no puede estar vacío";
    } else if (!validateEmail(email)) {
      error_msgs.email = "Este no es un email válido";
    }

    setErrors(error_msgs);
    
    if (Object.keys(error_msgs).length === 0){
      return true;
    } else {
      return false;
    }

  }
  return (
    <div className="container my-5 shadow">
      <h1 className="pt-3">Editar correo del sistema</h1>

      <Form className="" onSubmit={onSubmit}>
        <div className="row justify-content-evenly">
          <div className="col-md-12">
            <Form.Group className="mb-12">
              <Form.Label>Cuenta de correo electrónico:</Form.Label>
              <Form.Control
                onChange={onInputChange}
                value={email}
                name="email"
                placeholder="email"
              />
            </Form.Group>
            {errors.email && (
              <p className="text-danger">{errors.email}</p>
            )}
            <Form.Group className="mb-12">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                onChange={onInputChange}
                value={password}
                type="password"
                name="password"
                placeholder="Contraseña"
              />
            </Form.Group>

          </div>
        </div>

        <div className="row justify-content-evenly">
          <Button className="col mb-4 mx-5" variant="outline-success" type="submit">
            Guardar cambios
          </Button>
        </div>
      </Form>
    </div>
  );
}
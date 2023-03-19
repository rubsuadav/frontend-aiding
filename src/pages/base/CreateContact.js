import React from "react";
import {contacts} from "./services/backend.js";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const successMsg = {
  title: "Mensaje de confirmación",
  text: "Te confirmamos que el mensaje se ha enviado correctamente",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
}

const errorMsg = {
  title: "Mensaje de error",
  text: "Se ha producido un error al enviar el mensaje. Por favor, inténtalo de nuevo. Si el problema persiste, ponte en contacto con nosotros a través de nuestro correo electrónico.",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
}

function CreateContact(){
    let navigate = useNavigate();

    function postContact(contact) {
        const error_msgs = {};
        contacts
          .post("", contact)
          .then((response) => {
            console.log(response);
            swal(successMsg);
            navigate("/home");
          })
          .catch((error) => {
            if (error.response) {
              // el servidor respondió con un código de estado diferente de 2xx
              error_msgs.error = error.response;
              setErrors(error_msgs);
            } else {
              // error de red u otro error
              console.log(error);
              swal(errorMsg);
            }
          });
      };
      
        /* Validator */
    const [errors, setErrors] = useState({});

    function validateEmail(email) {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    }
    function validateForm() {
        let error_msgs = {};

    if (email === "" || email === null) {
        error_msgs.email = "El email no puede estar vacío";
    }else if (!validateEmail(email)) {
        error_msgs.email = "Este no es un email válido";
    }
    setErrors(error_msgs);

    if (Object.keys(error_msgs).length === 0) {
        return true;
    } else {
        return false;
    }
}

    const [contact, setContact] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const{ name, email, subject, message, } = contact;
    
    const onInputChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
      };
      const onSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
          const formData = new FormData();
          formData.append("name", name);
          formData.append("email", email);
          formData.append("subject", subject);
          formData.append("message", message);
          postContact(contact);
          swal(successMsg);
          navigate("/home");
          
        }
      };

      return (
        <div className="container my-5 shadow">
          <h1 className="pt-3">Contáctanos</h1>
          {errors.error && <p className="text-danger">{errors.error}</p>}
          <Form className="" onSubmit={(e) => onSubmit(e)}>
            <div className="row justify-content-evenly">
              <div className="col-md-5">
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    onChange={(e) => onInputChange(e)}
                    value={name}
                    name="name"
                    placeholder="Tu nombre"
                  />
                  {errors.name && <p className="text-danger">{errors.name}</p>}
                </Form.Group>
      
                <Form.Group className="mb-3">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    onChange={(e) => onInputChange(e)}
                    value={email}
                    name="email"
                    placeholder="Tu correo electrónico"
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email}</p>
                  )}
                </Form.Group>
      
                <Form.Group className="mb-3">
                  <Form.Label>Asunto</Form.Label>
                  <Form.Control
                    onChange={(e) => onInputChange(e)}
                    value={subject}
                    name="subject"
                    placeholder="Asunto del mensaje"
                  />
                  {errors.subject && (
                    <p className="text-danger">{errors.subject}</p>
                  )}
                </Form.Group>
                </div>
                <div className="col-md-5">
                <Form.Group className="mb-3">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control
                    onChange={(e) => onInputChange(e)}
                    value={message}
                    name="message"
                    as="textarea"
                    rows={3}
                    placeholder="Escribe aquí tu mensaje"
                  />
                  {errors.message && (
                    <p className="text-danger">{errors.message}</p>
                  )}
                </Form.Group>
              </div>
            </div>
      
            <div className="row justify-content-evenly">
              <Button className="col mb-4 mx-5" variant="primary" type="submit">
                Enviar mensaje
              </Button>
            </div>
          </Form>
        </div>
      );
}
export default CreateContact;

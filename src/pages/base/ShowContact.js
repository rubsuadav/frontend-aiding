import React from "react";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import {contacts} from "./services/backend.js";

const successMsg = {
  title: "Mensaje de confirmación",
  text: "Te confirmamos se ha actualizado correctamente",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
};

const errorMsg = {
  title: "Mensaje de error",
  text: "Se ha producido un error al actualizar",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
};
function ContactDetail() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    datetime: "",
    subject: "",
    message: "",
    isAnswered: "",
});

const { name, email, datetime, subject, message, isAnswered } = contact;

useEffect(() => {
  loadContact();
}, []);

const loadContact = async () => {
  const result = await contacts.get(`/${id}/`);
  setContact(result.data);
};

function putContact(contact) {
  const aux = contacts
    .put(`/${id}/`, contact)
    .then((response) => {
      swal(successMsg);
      navigate(`/contacts/${id}`);
    })
    .catch((error) => {
      swal(errorMsg);
    });
  }

const onInputChange = (e) => {
  if (e.target.name === "isAnswered") {
    setContact({ ...contact, [e.target.name]: e.target.checked });
  } else {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }
};
    

const onSubmit = async (e) => {
  e.preventDefault();
  putContact(contact);
};

return (
  <div className="container my-5 shadow">
        <h1 className="pt-3">Contáctanos</h1>
        {<p className="text-danger"></p>}
        <Form className="" onSubmit={(e) => onSubmit(e)}>
          <div className="row justify-content-evenly">
            <div className="col-md-5">
            <div className="mb-3">
          <label>Nombre</label>
          <p>{name}</p>
        </div>
        <div className="mb-3">
          <label>Correo electrónico</label>
          <p>{email}</p>
        </div>
        <div className="mb-3">
          <label>Asunto</label>
          <p>{subject}</p>
        </div>
      </div>
      <div className="col-md-5">
        <div className="mb-3">
          <label>Mensaje</label>
          <p>{message}</p>
        </div>
        <div className="mb-3">
          <label>Fecha y hora</label>
          <p>{datetime}</p>
        </div>
      </div>

            <div className="col-md-5">
              <Form.Group className="mb-3">
                <Form.Label>Respondido</Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  name="isAnswered"
                  checked={isAnswered}
                  onChange={(e) => onInputChange(e)}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-md-5">
              <Button variant="primary" type="submit">
                Actualizar
              </Button>
            </div>    
          </div>
        </Form>
      </div>


  );
}

export default ContactDetail;


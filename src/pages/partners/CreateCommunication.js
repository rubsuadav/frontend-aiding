import React from "react";
import {partners} from "./services/backend.js";
import swal from 'sweetalert';
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";


const successMsg = {
  title: "Mensaje de confirmación",
  text: "Te confirmamos que la comunicación se ha creado correctamente",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
}

const errorMsg = {
  title: "Mensaje de error",
  text: "Se ha producido un error al crear la comunicación",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
}

function CreateCommunication() {
    let navigate = useNavigate();

    const { id } = useParams();

    function postCommunication(){
        const aux = partners.post(`/${id}/communication/`,communication).then((response) => {
            console.log(response);
            swal(successMsg);
            navigate(`/partners/${id}`);
        }).catch((error) => {
            console.log(error);
            swal(errorMsg);
        });
    };

    const [communication, setCommunication] = useState({
      date: "",
      communication_type: "",
      description: "",
    });
  
    const {
      date,
      communication_type,
      description,
    } = communication;
  
    const onInputChange = (e) => {
      setCommunication({ ...communication, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      postCommunication(communication);
    };
  
    return (
      <div className="container my-5 shadow">
        <h1 className="pt-3">Crear comunicación</h1>
        <Form className="" onSubmit={(e) => onSubmit(e)}>
          <div className="row justify-content-evenly">
            <div className="col-md-6">
              
                <Form.Group className="mb-3">
                <Form.Label>Fecha de la comunicación</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={date}
                  type="date"
                  name="date"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tipo de la comunicación</Form.Label>
                <Form.Select
                  onChange={(e) => onInputChange(e)}
                  value={communication_type}
                  name="communication_type"
                >
                  <option value="TELEPHONIC">Telefónica</option>
                  <option value="TELEMATIC">Telemática</option>
                  <option value="PERSONAL">Personal</option>
                  <option value="EMAIL">Email</option>
                </Form.Select>
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={description}
                  name="description"
                  placeholder="Descripción de la comunicación"
                />
              </Form.Group>
            </div>
          </div>
  
          <div className="row justify-content-evenly">
            <Button className="col mb-4 mx-5" variant="outline-success" type="submit">
              Guardar comunicación
            </Button>
          </div>
        </Form>
      </div>
    );
  }

export default CreateCommunication;
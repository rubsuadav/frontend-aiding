import React from "react";
import {partners} from "./services/backend.js";
import swal from 'sweetalert';
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";


const successMsg = {
  title: "Mensaje de confirmación",
  text: "Te confirmamos que la donación se ha creado correctamente",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
}

const errorMsg = {
  title: "Mensaje de error",
  text: "Se ha producido un error al crear la donación",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
}

function CreateDonation() {
    let navigate = useNavigate();

    const { id } = useParams();

    function postDonation(){
        const aux = partners.post(`/${id}/donation`,donation).then((response) => {
            console.log(response);
            swal(successMsg);
            navigate(`/partners/${id}`);
        }).catch((error) => {
            console.log(donation)
            console.log(error);
            swal(errorMsg);
        });
    };

    const [donation, setDonation] = useState({
      date: "",
      amount: "",
      periodicity: "",
    });

    const {
      date,
      amount,
      periodicity,
    } = donation;
  
    const onInputChange = (e) => {
      setDonation({ ...donation, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      console.log(donation);
      postDonation(donation);
    };
  
    return (
      <div className="container my-5 shadow">
        <h1 className="pt-3">Crear donación</h1>
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
                <Form.Label>Cantidad</Form.Label>
                <Form.Select
                  onChange={(e) => onInputChange(e)}
                  value={periodicity}
                  name="periodicity">
                  <option value="MENSUAL">Mensual</option>
                  <option value="TRIMESTRAL">Trimestral</option>
                  <option value="SEMESTRAL">Semestral</option>
                  <option value="ANUAL">Anual</option>
                </Form.Select>
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={amount}
                  name="amount"
                />
              </Form.Group>
            </div>
          </div>
  
          <div className="row justify-content-evenly">
            <Button className="col mb-4 mx-5" variant="outline-success" type="submit">
              Crear donación
            </Button>
          </div>
        </Form>
      </div>
    );
  }

export default CreateDonation;
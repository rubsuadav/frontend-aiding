import React from "react";
import {turns} from "./services/backend.js";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";



const successMsg = {
  title: "Mensaje de confirmación",
  text: "El turno se ha creado correctamente",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
}

const errorMsg = {
  title: "Mensaje de error",
  text: "Se ha producido un error al crear el turno",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
}

function CreateTurn() {
    let navigate = useNavigate();

    function postTurn(turn){
        const aux = turns.post('',turn).then((response) => {
            console.log(response);
            swal(successMsg);
            navigate("/turns");
        }).catch((error) => {
            if (error.response && error.response.status === 409) {
              let error_msgs = {general: "PONER ESTOS MENSAJES DE ERROR SEGÚN LOS CÓDIGOS QUE PASE EL BACKEND"};
              setErrors(error_msgs);
            }else {
              swal(errorMsg);
            }
          });
    };

    /* Validator */
  const [errors, setErrors] = useState({});

  function validateForm() {
    let error_msgs = {};

    if (date === "" || date === null) {
      error_msgs.name = "La fecha del turno no puede estar vacía";
    }

    if (start === "" || start === null) {
      error_msgs.last_name = "La hora de comienzo no puede estar vacía";
    }

    if (end === "" || end === null) {
      error_msgs.dni = "La hora de finalización no puede estar vacía";
    }

    setErrors(error_msgs);

    if (Object.keys(error_msgs).length === 0) {
      return true;
    } else {
      return false;
    }
  }

    const [turn, setTurn] = useState({
      date: "",
      start: "",
      end: "",
    });

    const {
      date,
      start,
      end,
    } = turn;

    const onInputChange = (e) => {
      setTurn({ ...turn, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
      e.preventDefault();
      if (validateForm()) {
        postTurn(turn);
      }
    };

    return (
      <div className="container my-5 shadow">
        <h1 className="pt-3">Crear turno</h1>
        <Form className="" onSubmit={(e) => onSubmit(e)}>
          <div className="row justify-content-evenly">
            <div className="col-md-5">
              <Form.Group className="mb-3">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={date}
                  name="date"
                  type="date"
                  placeholder="Fecha del turno"
                />
              </Form.Group>
                {errors.date && (
                  <p className="text-danger">{errors.date}</p>
                )}
              <Form.Group className="mb-3">
                <Form.Label>Hora de comienzo</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={start}
                  name="start"
                  placeholder="Hora de comienzo del turno"
                />
              </Form.Group>
              {errors.start && (
                    <p className="text-danger">{errors.start}</p>
                  )}
              <Form.Group className="mb-3">
                <Form.Label>Hora de finalización</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={end}
                  name="end"
                  placeholder="Hora de finalización del turno"
                />
              </Form.Group>
              {errors.end && (
                    <p className="text-danger">{errors.end}</p>
                  )}
            </div>
          </div>
          {errors.general && (<p className="text-danger">{errors.general}</p>)}
          <div className="row justify-content-evenly">
            <Button className="col mb-4 mx-5" variant="outline-success" type="submit">
              Guardar turno
            </Button>
          </div>
        </Form>
      </div>
    );
  }

export default CreateTurn;
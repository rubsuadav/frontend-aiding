import React from "react";
import {turns} from "./services/backend.js";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import IBAN from 'iban';
import { parseISO, differenceInYears } from 'date-fns';

const successMsg = {
  title: "Mensaje de confirmación",
  text: "El turno se ha editado correctamente",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
};

const errorMsg = {
  title: "Mensaje de error",
  text: "Se ha producido un error al actualizar el turno",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
};

function UpdateTurn() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [turn, setTurn] = useState({
    date: "",
    startTime: "",
    endTime: "",
  });

  const {
    date,
    startTime,
    endTime,
  } = turn;

  useEffect(() => {
    loadTurn();
  }, []);

  const loadTurn = async () => {
    const result = await turns.get(`/turns/${id}/`);
    setTurn(result.data);
  };

  function putTurn(turn) {
    const aux = turns
      .put(`/turns/${id}/`, turn)
      .then((response) => {
        swal(successMsg);
        navigate(`/turns/${id}`);
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          let error_msgs = {general: "La fecha de inicio debe ser anterior a la de finalización, y la fecha no debe haber pasado."};
          setErrors(error_msgs);
        }else {
          swal(errorMsg);
        }
      });
  }

  const onInputChange = (e) => {
    setTurn({ ...turn, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      putTurn(turn);
    }
  };

  /* Validator */
  const [errors, setErrors] = useState({});

  function validateForm() {
    let error_msgs = {};

    if (date === "" || date === null) {
      error_msgs.name = "La fecha del turno no puede estar vacía";
    }

    if (startTime === "" || startTime === null) {
      error_msgs.last_name = "La hora de comienzo no puede estar vacía";
    }

    if (endTime === "" || endTime === null) {
      error_msgs.dni = "La hora de finalización no puede estar vacía";
    }

    setErrors(error_msgs);

    if (Object.keys(error_msgs).length === 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="container my-5 shadow">
        <h1 className="pt-3">Actualizar turno</h1>
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
                  value={startTime}
                  name="startTime"
                  type="time"
                  placeholder="Hora de comienzo del turno"
                />
              </Form.Group>
              {errors.startTime && (
                    <p className="text-danger">{errors.startTime}</p>
                  )}
              <Form.Group className="mb-3">
                <Form.Label>Hora de finalización</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={endTime}
                  name="endTime"
                  type="time"
                  placeholder="Hora de finalización del turno"
                />
              </Form.Group>
              {errors.endTime && (
                    <p className="text-danger">{errors.endTime}</p>
                  )}
            </div>
          </div>
          {errors.general && (<p className="text-danger">{errors.general}</p>)}
          <div className="row justify-content-evenly">
            <Button className="col mb-4 mx-5" variant="outline-success" type="submit">
              Actualizar turno
            </Button>
          </div>
        </Form>
      </div>
  );
}

export default UpdateTurn;
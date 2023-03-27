import swal from "sweetalert";
import Form from "react-bootstrap/Form";
import { events } from "./services/backend";
import Button from "react-bootstrap/Button";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { userTimeZone  } from "../../config";

const errorMsg = {
  title: "Mensaje de error",
  text: "Se ha producido un error al crear el evento",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
};

const successMsg = {
  title: "Mensaje de confirmación",
  text: "El evento se ha creado correctamente",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
};

function AdminCreateEvent() {
    let navigate = useNavigate();
    const [event, setEventData] = React.useState(
      {
      title: '',
      description: '',
      start_date: '',
      end_date: '',
      places: '',
      street: '',
      number: '',
      city: '',
      }
    );

    const onTitleChange = (e) => {
      setEventData({ ...event, title: e.target.value });
    }

    const onDescriptionChange = (e) => {
      setEventData({ ...event, description: e.target.value });
    }

    const onStreetChange = (e) => {
      setEventData({ ...event, street: e.target.value });
    }
  
    const onNumberChange = (e) => {
      setEventData({ ...event, number: e.target.value });
    }
  
    const onCityChange = (e) => {
      setEventData({ ...event, city: e.target.value });
    }

    const onPlacesChange = (e) => {
      setEventData({ ...event, places: e.target.value });
    }
  
    const onStartDateChange = (e) => {
      setEventData({ ...event, start_date: moment(e.target.value).format('YYYY-MM-DD HH:mm:ss') });
    }
  
    const onEndDateChange = (e) => {
      setEventData({ ...event, end_date:  moment(e.target.value).format('YYYY-MM-DD HH:mm:ss')  });
    }

    const onSubmit = async (e) => {
      e.preventDefault();
      console.log(event)
      const eventWithTimeZone = { ...event,userTimeZone}
      postEvent(eventWithTimeZone);
        
    };

    function postEvent(event){
      const aux = events.post('',event).then((response) => {
        console.log(response);
        console.log(event);
        swal(successMsg);
        navigate("/admin/events");
      }).catch((error) => {
        console.log(error);
        console.log(event);
        swal(errorMsg);
      });
    };

    const { title, description, start_date, end_date, places, street,number,city } = event;


    return (
        <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 shadow">
            <h1 className="pt-3">Crear evento</h1>
            <Form className="" onSubmit={(e) => onSubmit(e)}>
              <div className="row justify-content-evenly">
                <Form.Group className="mb-3">
                  <Form.Label>Título</Form.Label>
                  <Form.Control
                    onChange={(e) => onTitleChange(e)}
                    value={title}
                    name="title"
                    placeholder="Título del evento"
                  />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    onChange={(e) => onDescriptionChange(e)}
                    value={description}
                    name="description"
                    placeholder="Descripción del evento"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Plazas</Form.Label>
                  <Form.Control
                    onChange={(e) => onPlacesChange(e)}
                    value={places}
                    name="places"
                    placeholder="Plazas en el evento"
                  />
                </Form.Group>

  
                <Form.Group className="mb-3">
                  <Form.Label>Calle</Form.Label>
                  <Form.Control
                    onChange={(e) => onStreetChange(e)}
                    value={street}
                    name="street"
                    placeholder="Nombre de la calle"
                  />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Número</Form.Label>
                  <Form.Control
                    onChange={(e) => onNumberChange(e)}
                    value={number}
                    name="number"
                    placeholder="Número de la calle"
                  />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    onChange={(e) => onCityChange(e)}
                    value={city}
                    name="city"
                    placeholder="Ciudad donde se encuentra el evento"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Fecha de inicio</Form.Label>
                <Form.Control
                  onChange={(e) => onStartDateChange(e)}
                  value={start_date}
                  type="datetime-local"
                  name="start_date"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Fecha de finalizado</Form.Label>
                <Form.Control
                  onChange={(e) => onEndDateChange(e)}
                  value={end_date}
                  type="datetime-local"
                  name="end_date"
                />
              </Form.Group>
  
              </div>
  
              <div className="row justify-content-evenly">
                <Button className="col mb-4 mx-2" variant="primary" type="submit">
                  Guardar evento
                </Button>
                <Link
                  className="btn btn-outline-danger col mb-4 mx-2"
                  to="/admin/events"
                >
                  Cancelar
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
};
export default AdminCreateEvent;
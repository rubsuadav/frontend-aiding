import swal from "sweetalert";
import Form from "react-bootstrap/Form";
import { events } from "./services/backend";
import Button from "react-bootstrap/Button";
import React from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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

export default function AdminUpdateEvent() {
    let navigate = useNavigate();

    const { id } = useParams();

    const [event, setEventData] = React.useState([
        {
        title: '...',
        description: '...',
        start_date: '...',
        end_date: '...',
        places: '...',
        street: '...',
        number: '...',
        city: '...',
        }
      ]);

    const { title, description, start_date, end_date, places, street,number,city } = event;

      useEffect(() => {
        loadEvent();
      }, []);
    
      const loadEvent = async () => {
        const result = await events.get(`/${id}`);
        setEventData(result.data);
      };

      const onInputChange = (e) => {
        setEventData({...event,[e.target.data]:e.target.value});
      }

      const onSubmit = async (e) => {
        e.preventDefault();
        putEvent(event);
      };

      function putEvent(event) {
        const aux = events
          .put(`/${id}`, event)
          .then((response) => {
            console.log(response);
            swal(successMsg);
            navigate(`/events/${id}`);
          })
          .catch((error) => {
            console.log(error);
            swal(errorMsg);
          });
      }

    

    return (
        <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 shadow">
            <h1 className="pt-3">Actualizar evento</h1>
            <Form className="" onSubmit={(e) => onSubmit(e)}>
              <div className="row justify-content-evenly">
                <Form.Group className="mb-3">
                  <Form.Label>Título</Form.Label>
                  <Form.Control
                    onChange={(e) => onInputChange(e)}
                    value={title}
                    name="title"
                    placeholder="Título del evento"
                  />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    onChange={(e) => onInputChange(e)}
                    value={description}
                    name="description"
                    placeholder="Descripción del evento"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Plazas</Form.Label>
                  <Form.Control
                    onChange={(e) => onInputChange(e)}
                    value={places}
                    name="places"
                    placeholder="Plazas en el evento"
                  />
                </Form.Group>

  
                <Form.Group className="mb-3">
                  <Form.Label>Calle</Form.Label>
                  <Form.Control
                    onChange={(e) => onInputChange(e)}
                    value={street}
                    name="street"
                    placeholder="Nombre de la calle"
                  />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Número</Form.Label>
                  <Form.Control
                    onChange={(e) => onInputChange(e)}
                    value={number}
                    name="number"
                    placeholder="Número de la calle"
                  />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    onChange={(e) => onInputChange(e)}
                    value={city}
                    name="city"
                    placeholder="Ciudad donde se encuentra el evento"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Fecha de inicio</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={start_date}
                  type="date"
                  name="start_date"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Fecha de finalizado</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={end_date}
                  type="date"
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
                  to={`/events/${id}`}
                >
                  Cancelar
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    )
}
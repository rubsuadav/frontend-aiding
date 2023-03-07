import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import resourcesApi from "./services/backend.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const successMsg = {
  title: "Mensaje de confirmación",
  text: "Te confirmamos que el recurso se ha actualizado correctamente",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
};

const errorMsg = {
  title: "Mensaje de error",
  text: "Se ha producido un error al actualizado el recurso",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
};

export default function UpdateResource() {
  let navigate = useNavigate();

  const [resource, setResource] = useState({
    title: "",
    description: "",
    street: "",
    number: "",
    city: "",
    additional_comments: "",
  });

  const { title, description, street, number, city, additional_comments } =
    resource;

    const { id } = useParams();

    useEffect(() => {
      loadResouce();
    }, []);
  
    const loadResouce = async () => {
      const result = await resourcesApi.get(`/${id}`);
      setResource(result.data[0]);
    };

  const onInputChange = (e) => {
    setResource({ ...resource, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    putResource(resource);
  };

  function putResource(resource) {
    const aux = resourcesApi
      .put(`/${id}`, resource)
      .then((response) => {
        console.log(response);
        swal(successMsg);
        navigate(`/information/resources/${id}`);
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
          <h1 className="pt-3">Crear recurso</h1>
          <Form className="" onSubmit={(e) => onSubmit(e)}>
            <div className="row justify-content-evenly">
              <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={title}
                  name="title"
                  placeholder="Título del recurso"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={description}
                  name="description"
                  placeholder="Descripción del recurso"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Calle</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={street}
                  name="street"
                  placeholder="Calle del recurso"
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
                  placeholder="Ciudad donde se encuentra el recurso"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Comentarios adicionales</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={additional_comments}
                  name="additional_comments"
                  placeholder="Comentarios adicionales"
                />
              </Form.Group>
            </div>

            <div className="row justify-content-evenly">
              <Button className="col mb-4 mx-2" variant="primary" type="submit">
                Guardar recurso
              </Button>
              <Link
                className="btn btn-outline-danger col mb-4 mx-2"
                to={`/information/resources/${id}`}
              >
                Cancelar
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

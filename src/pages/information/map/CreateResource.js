import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import resourcesApi from "./services/backend.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const successMsg = {
  title: "Mensaje de confirmación",
  text: "Te confirmamos que el recurso se ha creado correctamente",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
};

const errorMsg = {
  title: "Mensaje de error",
  text: "Se ha producido un error al crear el recurso",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
};

export default function CreateResource() {

  let navigate = useNavigate();

  const [resource, setResource] = useState({
    title: "",
    description: "",
    contact_phone: "",
    street: "",
    number: "",
    city: "",
    additional_comments: "",
    resource_type:"seniors_association"
  });

  const { title, description, contact_phone, street, number, city, additional_comments, resource_type } =
    resource;

  const onInputChange = (e) => {
    setResource({ ...resource, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      postResource(resource);
    }
  };

  function postResource(resource) {
    const aux = resourcesApi
      .post("", resource)
      .then((response) => {
        console.log(response);
        swal(successMsg);
        navigate("/admin/information/resources");
      })
      .catch((error) => {
         if (error.response) {
          let error_msgs = {general: "No ha rellenado correctamente."};
          setErrors(error_msgs);
        }
        swal(errorMsg);
      });
  }

    /* Validator */
   const [errors, setErrors] = useState({});

   function validateTLF(contact_phone) {
     const tlfRegex = /^\d{9}$/;
     if (!tlfRegex.test(contact_phone)) {
       return false;
     }
     return true;
   }
 
   function validateForm() {
     let error_msgs = {};
 
     if (title === "" || title === null) {
       error_msgs.title = "El título no puede estar vacío";
     }
 
     if (street === "" || street === null) {
       error_msgs.street = "La calle no puede estar vacía";
     }
 
     if (!validateTLF(contact_phone)) {
       error_msgs.contact_phone = "Este no es un teléfono válido";
     }
 
     if (city === "" || city === null) {
       error_msgs.city = "La ciudad no puede estar vacía";
     }
 
     setErrors(error_msgs);
 
     if (Object.keys(error_msgs).length === 0) {
       return true;
     } else {
       return false;
     }
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
              {errors.title && (
                  <p className="text-danger">{errors.title}</p>
                )}

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
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={contact_phone}
                  name="contact_phone"
                  placeholder="Teléfono de contacto"
                />
              </Form.Group>
              {errors.contact_phone && (
                  <p className="text-danger">{errors.contact_phone}</p>
                )}


              <Form.Group className="mb-3">
                <Form.Label>Calle</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={street}
                  name="street"
                  placeholder="Calle del recurso"
                />
              </Form.Group>
              {errors.street && (
                  <p className="text-danger">{errors.street}</p>
                )}

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
              {errors.city && (
                  <p className="text-danger">{errors.city}</p>
                )}

              <Form.Group className="mb-3">
                <Form.Label>Comentarios adicionales</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={additional_comments}
                  name="additional_comments"
                  placeholder="Comentarios adicionales"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tipo de recurso</Form.Label>
                <Form.Select
                  onChange={(e) => onInputChange(e)}
                  value={resource_type}
                  name="resource_type"
                >
                  <option value="neighborhood_association">Asociación de vecinos</option>
                  <option value="seniors_association">Asociación de mayores</option>
                  <option value="nursing_home">Residencia</option>
                 
                </Form.Select>
              </Form.Group>
            </div>

            <div className="row justify-content-evenly">
              <Button className="col mb-4 mx-2" variant="primary" type="submit">
                Guardar recurso
              </Button>
              <Link
                className="btn btn-outline-danger col mb-4 mx-2"
                to="/admin/information/resources"
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

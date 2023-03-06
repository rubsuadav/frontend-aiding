import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function AddResource() {
  
  let navigate = useNavigate();

  const [resource, setResource] = useState({
    title: "",
    description: "",
    street: "",
    number: "",
    city: "",
    additionals_comments: "",
  });

  const { title, description, street, number, city, additionals_comments } = resource;

  const onInputChange = (e) => {
    setResource({ ...resource, [e.target.title]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    showAlert();
    await axios.post("https://localhost:8000/information/resources/", resource);
    navigate("/");
  };

  const showAlert = async () => {
    swal({
      title: "Mensaje de confirmación",
      text: "Le confirmamos que el recurso se ha creado correctamente.",
      icon: "success",
      button: "Aceptar",
      timer: "2000",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Resource</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
            <label htmlFor="Title" className="form-label">
                Title
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter title"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
                required="true"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Description" className="form-label">
              Description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
                required="true"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Street" className="form-label">
               Street
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter street"
                name="street"
                value={street}
                onChange={(e) => onInputChange(e)}
                required="true"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Number" className="form-label">
               Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter number"
                name="number"
                value={number}
                onChange={(e) => onInputChange(e)}
                required="true"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="City" className="form-label">
                City
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter city"
                name="city"
                value={city}
                onChange={(e) => onInputChange(e)}
                required="true"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Additionals_comments" className="form-label">
                  Additionals_comments
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter city"
                name="additionals_comments"
                value={additionals_comments}
                onChange={(e) => onInputChange(e)}
                required="true"
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
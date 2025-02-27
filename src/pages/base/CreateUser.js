import React from "react";
import { base } from "./services/backend.js";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { rolesBE } from "./services/backend.js";

const successMsg = {
  title: "Mensaje de confirmación",
  text: "El usuario se ha creado correctamente",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
};

const errorMsg = {
  title: "Mensaje de error",
  text: "Se ha producido un error al crear el usuario",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
};

export default function CreateUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    is_admin: false,
    roles_id: "",
  });

  const [roles, setRoles] = useState([
    {
      id: "",
      name: "",
    },
  ]);

  const { username, password, is_admin, roles_id } = user;

  const onInputChange = (e) => {
    if (e.target.name === "is_admin") {
      setUser({ ...user, [e.target.name]: e.target.checked });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      formData.append("roles_id", roles_id);

      postUser(formData);
    }
  };


  /* Validator */
  const [errors, setErrors] = useState({});

  function validateForm() {
    let error_msgs = {};

    if (username === "" || username === null) {
      error_msgs.username = "El nombre de usuario no puede estar vacío";
    }

    if (password === "" || password === null) {
      error_msgs.password = "La contraseña no puede estar vacía";
    }

    setErrors(error_msgs);

    if (Object.keys(error_msgs).length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function postUser(user) {
    const aux = base
      .post("users/", user)
      .then((response) => {
        console.log(response.data);
        swal(successMsg);
        navigate("/admin/base/users");
      })
      .catch((error) => {
        if (errors.response && errors.response.status === 404) {
          let error_msgs = { roles: "Debe de seleccionar un rol" };
          setErrors(error_msgs);
        } else {
          swal(errorMsg);
        }
        console.log(errors);
      });
  }

  function getRoles() {
    rolesBE
      .get("")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getRoles();
  }, []);


  return (
    <div className="container my-5 shadow">
      <h1 className="pt-3">Crear usuario</h1>

      <Form className="" onSubmit={(e) => onSubmit(e)}>
        <div className="row justify-content-evenly">
          <div className="col-md-12">
            <Form.Group className="mb-3">
              <Form.Label>Nombre de usuario:</Form.Label>
              <Form.Control
                onChange={(e) => onInputChange(e)}
                value={username}
                name="username"
                placeholder="Nombre del usuario"
                required={true}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                onChange={(e) => onInputChange(e)}
                value={password}
                type="password"
                name="password"
                placeholder="Contraseña"
                required={true}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Administrador</Form.Label>
              <Form.Check
                type="switch"
                id="custom-switch"
                name="is_admin"
                defaultChecked={false}
                checked={is_admin}
                onChange={(e) => onInputChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Roles</Form.Label>
              <Form.Select
                onChange={(e) => onInputChange(e)}
                value={roles_id}
                name="roles_id"
              >
                <option value=""></option>
                {roles.map((rol) => (
                  <option value={rol.name}>{rol.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
        </div>

        <div className="row justify-content-evenly">
          <Button
            className="col mb-4 mx-5"
            variant="outline-success"
            type="submit"
          >
            Guardar usuario
          </Button>
        </div>
      </Form>
    </div>
  );
}

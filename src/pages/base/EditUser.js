import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { base, rolesBE } from "./services/backend.js";
import swal from 'sweetalert';

const successMsg = {
  title: "Mensaje de confirmación",
  text: "El usuario se ha actualizado correctamente",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
}

const errorMsg = {
  title: "Mensaje de error",
  text: "Se ha producido un error al actualizar el usuario",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
}

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    is_admin: "",
    roles_id: "",
  });

  const [roles, setRoles] = useState([
    {
      id: "",
      name: "",
    },
  ]);

  const { username, password, is_admin, roles_id } = user;

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
    const fetchUser = async () => {
      const response = await base.get(`users/${id}`);
      setUser(response.data);
    };
    fetchUser();
    getRoles();
  }, [id]);

  const onInputChange = (e) => {
    if (e.target.name === "is_admin") {
      setUser({ ...user, [e.target.name]: e.target.checked });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await base.put(`/users/${id}`, user);
      swal(successMsg);
      navigate("/admin/base/users");
    } catch (error) {
      console.error(error);
      swal(errorMsg);
    }
  };

  return (
    <div className="container my-5 shadow">
      <h1 className="pt-3">Editar usuario</h1>

      <Form className="" onSubmit={onSubmit}>
        <div className="row justify-content-evenly">
          <div className="col-md-12">
            <Form.Group className="mb-12">
              <Form.Label>Nombre de usuario:</Form.Label>
              <Form.Control
                onChange={onInputChange}
                value={username}
                name="username"
                placeholder="Nombre del usuario"
              />
            </Form.Group>

            <Form.Group className="mb-12">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                onChange={onInputChange}
                value={password}
                type="password"
                name="password"
                placeholder="Contraseña"
              />
            </Form.Group>

              <Form.Group className="mb-12">
                <Form.Label>Administrador</Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  name="is_admin"
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
                  <option value={rol.id}>{rol.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
        </div>

        <div className="row justify-content-evenly">
          <Button className="col mb-4 mx-5" variant="outline-success" type="submit">
            Guardar cambios
          </Button>
        </div>
      </Form>
    </div>
  );
}
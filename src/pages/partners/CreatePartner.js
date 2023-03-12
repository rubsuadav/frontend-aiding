import React from "react";
import {partners,donations} from "./services/backend.js";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";


const successMsg = {
  title: "Mensaje de confirmación",
  text: "Te confirmamos que el socio se ha creado correctamente",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
}

const errorMsg = {
  title: "Mensaje de error",
  text: "Se ha producido un error al crear el socio",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
}


function CreatePartner() {
    let navigate = useNavigate();

    function postPartner(partner){
        const aux = partners.post('',partner).then((response) => {
            console.log(response);
            swal(successMsg);
            navigate("/partners");
        }).catch((error) => {
            console.log(error);
            swal(errorMsg);
        });
    };


    const [partner, setPartner] = useState({
      name: "",
      last_name: "",
      dni: "",
      phone1: "",
      phone2: "",
      birthdate: "",
      sex: "none",
      email: "",
      address: "",
      postal_code: "",
      township: "",
      province: "",
      language: "spanish",
      iban: "",
      account_holder: "",
      state: "active",
    });
  
  
    const {
      name,
      last_name,
      dni,
      phone1,
      phone2,
      birthdate,
      sex,
      email,
      address,
      postal_code,
      township,
      province,
      language,
      iban,
      account_holder,
      state,
    } = partner;
  
    const onInputChange = (e) => {
      setPartner({ ...partner, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      postPartner(partner);
    };
  
    return (
      <div className="container my-5 shadow">
        <h1 className="pt-3">Crear socio</h1>
        <Form className="" onSubmit={(e) => onSubmit(e)}>
          <div className="row justify-content-evenly">
            <div className="col-md-5">
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={name}
                  name="name"
                  placeholder="Nombre del socio"
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={last_name}
                  name="last_name"
                  placeholder="Apellidos del socio"
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>DNI</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={dni}
                  name="dni"
                  placeholder="DNI del socio"
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={phone1}
                  name="phone1"
                  placeholder="Teléfono del socio"
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Teléfono adicional</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={phone2}
                  name="phone2"
                  placeholder="Teléfono del socio"
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Género</Form.Label>
                <Form.Select
                  onChange={(e) => onInputChange(e)}
                  value={sex}
                  name="sex"
                >
                  <option value="men">Hombre</option>
                  <option value="women">Mujer</option>
                  <option value="none">No especifica</option>
                </Form.Select>
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Idioma</Form.Label>
                <Form.Select
                  onChange={(e) => onInputChange(e)}
                  value={language}
                  name="language"
                >
                  <option value="spanish">Español</option>
                  <option value="catalan">Catalán</option>
                </Form.Select>
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Titular de la cuenta</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={account_holder}
                  name="account_holder"
                  placeholder="Titular de la cuenta del socio"
                />
              </Form.Group>
            </div>
  
            <div className="col-md-5">
              <Form.Group className="mb-3">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={birthdate}
                  type="date"
                  name="birthdate"
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={address}
                  name="address"
                  placeholder="Dirección del socio"
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Código postal</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={postal_code}
                  name="postal_code"
                  placeholder="Código postal del socio"
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Pueblo/Ciudad</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={township}
                  name="township"
                  placeholder="Pueblo/Ciudad del socio"
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={email}
                  name="email"
                  placeholder="E-mail del socio"
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Provincia</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={province}
                  name="province"
                  placeholder="Provincia del socio"
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Iban</Form.Label>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={iban}
                  name="iban"
                  placeholder="Iban del socio"
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Estado</Form.Label>
                <Form.Select
                  onChange={(e) => onInputChange(e)}
                  value={state}
                  name="state"
                >
                  <option value="ACTIVE">Activo</option>
                  <option value="INACTIVE">Inactivo</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>
  
          <div className="row justify-content-evenly">
            <Button className="col mb-4 mx-5" variant="outline-success" type="submit">
              Guardar socio
            </Button>
          </div>
        </Form>
      </div>
    );
  }

export default CreatePartner;
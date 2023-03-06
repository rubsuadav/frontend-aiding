import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function UpdateCreatePartnerForm({ data, request, feature }) {
  const [partner, setPartner] = useState({
    name: "",
    last_name: "",
    dni: "",
    phone: "",
    email: "",
    province: "",
    iban: "",
    state: "active",
  });

  if (data) {
    partner = data;
  }

  const { name, last_name, dni, phone, email, province, iban, state } = partner;

  const onInputChange = (e) => {
    setPartner({ ...partner, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await request(partner);
  };

  return (
    <div className="container my-5 shadow-lg">
      <h1 className="pt-3">{feature}</h1>
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
                value={phone}
                name="phone"
                placeholder="Teléfono del socio"
              />
            </Form.Group>
          </div>

          <div className="col-md-5">
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
          <Button className="col mb-4 mx-5" variant="success" type="submit">
            Guardar socio
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default UpdateCreatePartnerForm;

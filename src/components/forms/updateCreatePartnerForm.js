import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function UpdateCreatePartnerForm({data, request}) {

    const [partner, setPartner] = useState({
        name: '',
        last_name: '',
        dni: '',
        phone: '',
        email: '',
        province: '',
        iban: '',
        state: 'active',
    });

    if (data){
        partner=data;
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
    <Form onSubmit={(e) => onSubmit(e)}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control onChange={(e) => onInputChange(e)} value={name} name='name' placeholder="Nombre del socio"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control onChange={(e) => onInputChange(e)} value={last_name} name='last_name' placeholder="Apellidos del socio"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>DNI</Form.Label>
        <Form.Control onChange={(e) => onInputChange(e)} value={dni} name='dni' placeholder="DNI del socio"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control onChange={(e) => onInputChange(e)} value={phone} name='phone' placeholder="Teléfono del socio"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>E-mail</Form.Label>
        <Form.Control onChange={(e) => onInputChange(e)} value={email} name='email' placeholder="E-mail del socio"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Provincia</Form.Label>
        <Form.Control onChange={(e) => onInputChange(e)} value={province} name='province' placeholder="Provincia del socio"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Iban</Form.Label>
        <Form.Control onChange={(e) => onInputChange(e)} value={iban} name='iban' placeholder="Iban del socio"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Estado</Form.Label>
        <Form.Select onChange={(e) => onInputChange(e)} value={state} name='state' >
          <option value="active" >Activo</option>
          <option value="inactive" >Inactivo</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UpdateCreatePartnerForm;
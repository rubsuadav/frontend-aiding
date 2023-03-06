import Form from 'react-bootstrap/Form';

function updateCreatePartnerForm({partner}) {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control placeholder="Nombre del socio"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control placeholder="Apellidos del socio"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>DNI</Form.Label>
        <Form.Control placeholder="DNI del socio"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>E-mail</Form.Label>
        <Form.Control placeholder="E-mail del socio"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>DNI</Form.Label>
        <Form.Select disabled>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this" disabled />
      </Form.Group>
    </>
  );
}

export default updateCreatePartnerForm;
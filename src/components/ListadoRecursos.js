import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Listado2() {

    const [data, setData] = useState([]);
    
    // titulo, descripción, calle, numero, ciudad, comentarios adicionales, coordenadas x e y, y sección

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => setData(response.data))
          .catch(error => console.log(error));
      }, []);

  return (
    <div>
       <Card style={{ width: '40rem' }}>
          <Card.Header>Recursos</Card.Header>
          {data.map(item => (
          <ListGroup variant="flush">
            <ListGroup.Item>
              <div key={item.id}>
              <DropdownButton variant="light" id="dropdown-item-button" title={item.title}>
                <Dropdown.Item as="button"><h5>Descripción:</h5><p>{item.body}</p></Dropdown.Item>
                <Dropdown.Item as="button"><h5>Dirección ' Calle Número Ciudad ':</h5><p>{item.body}</p></Dropdown.Item>
                <Dropdown.Item as="button"><h5>Comentarios adicionales:</h5><p>{item.body}</p></Dropdown.Item>
                <Dropdown.Item as="button"><h5>Coordenadas x e y:</h5><p>{item.body}</p></Dropdown.Item>
              </DropdownButton>
              </div>
            </ListGroup.Item>
         </ListGroup>
      ))}
      </Card>
    </div>
  )
}
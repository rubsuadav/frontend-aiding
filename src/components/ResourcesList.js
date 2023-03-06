import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// Css
import '../css/mapResources.css';

export default function ResourcesList() {

    const [data, setData] = useState([]);
    
    // titulo, descripción, calle, numero, ciudad, comentarios adicionales, coordenadas x e y, y sección

    // https://localhost:8000/information/resources/
    // https://jsonplaceholder.typicode.com/posts

    // onChange={handleDireccionChange} onClick={handleBuscarClick} 

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => setData(response.data))
          .catch(error => console.log(error));
      }, []);

  return (
    <div>

       <Card style={{ width: '40rem' }}>
          <Card.Header>Haz click sobre cada uno para ver más información.</Card.Header>
          {data.map(item => (
          <ListGroup variant="flush">
            <ListGroup.Item>
              <div key={item.id} class="izquierda" >
              <DropdownButton variant="light" id="dropdown-item-button" title={item.title}>
                <div class="custom-dropdown-item">
                <Dropdown.Item as="button"><h5>Ciudad:</h5><p class="text-wrap">{item.body}</p></Dropdown.Item>
                {/* <Dropdown.Item  as="button"><h5>Descripción:</h5><p>{item.description}</p></Dropdown.Item>
                <Dropdown.Item  as="button"><h5>Calle:</h5><p>{item.street}</p></Dropdown.Item>
                <Dropdown.Item  as="button"><h5>Número:</h5><p>{item.number}</p></Dropdown.Item>
                <Dropdown.Item  as="button"><h5>Ciudad:</h5><p>{item.city}</p></Dropdown.Item>
                <Dropdown.Item  as="button"><h5>Comentarios adicionales:</h5><p>{item.additionals_comments}</p></Dropdown.Item>
                 */}</div>              
              </DropdownButton>
              </div>
            </ListGroup.Item>
         </ListGroup>
      ))}
      </Card>
  
    </div>
  )
}
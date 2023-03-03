import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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
       <Card style={{ width: '20rem' }}>
          <Card.Header>Recursos</Card.Header>
          {data.map(item => (
          <ListGroup variant="flush">
            <ListGroup.Item>
              <div key={item.id}>
                <h2>{item.title}</h2>
                <h3>Descripción:</h3><p>{item.body}</p>
                <h3>Dirección ' Calle Número Ciudad ':</h3><p>{item.body}</p>
                <h3>Comentarios adicionales:</h3><p>{item.body}</p>
                <h3>Coordenadas x e y:</h3><p>{item.body}</p>
              </div>
            </ListGroup.Item>
         </ListGroup>
      ))}
      </Card>
    </div>
  )
}
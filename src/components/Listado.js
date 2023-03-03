import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Map, MapContainer, TileLayer } from "react-leaflet";


export default function Listado() {
    
        const [objetos, setObjetos] = useState([]);
    
         useEffect(() => {
        // Llamada a axios para obtener los objetos
        axios.get('https://mi-api.com/objetos')
        .then(response => setObjetos(response.data))
        .catch(error => console.log(error));
    }, 
    []);

  return (
        <div>
        <Container>
        <Row>
            <Col>
            <ListGroup>
                {objetos.map(objeto => (
                <ListGroup.Item key={objeto.id}>
                    {objeto.nombre}
                </ListGroup.Item>
                ))}
            </ListGroup>
            </Col>
        </Row>
        </Container>
        </div>
    );
}


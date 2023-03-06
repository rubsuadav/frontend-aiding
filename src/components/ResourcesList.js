import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from "react-router-dom";
import swal from "sweetalert";

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

      /* const deleteResource = async (id) => {
        await axios.delete(`https://localhost:8000/information/resources/${id}`);
        //navigate("/");
      };
    
      const showAlert = async () => {
        swal({
          title: "Mensaje de confirmación",
          text: "Te confirmamos que el recurso se ha borrado correctamente",
          icon: "success",
          button: "Aceptar",
          timer: "2000",
        });
      };
    
      const showAlert2 = async () => {
        swal({
          title: "Eliminar recurso",
          text: "Estás seguro que desea eliminar el recurso?",
          icon: "warning",
          buttons: ["No", "Sí"],
        }).then((res) => {
          if (res) {
            deleteResource(data.id);
            showAlert();
          }
        });
      }; */

  return (
    <div>
       <Card style={{ width: '40rem' }}>
          <Card.Header>Haz click sobre cada uno para ver más información.</Card.Header>
          {data.map(item => (
          <ListGroup variant="flush">
            <ListGroup.Item>
              <div key={item.id}>
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
             {/*  <Link
            className="btn btn-outline-primary mx-2"
            to={`/editresource/${data.id}`}
          >
            Edit
          </Link>
          <button
            className="btn btn-danger mx-2"
            onClick={() => {
              showAlert2();
            }}
          >
            Delete
          </button> */}
              </div>
            </ListGroup.Item>
         </ListGroup>
      ))}
      </Card>
    </div>
  )
}
import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useParams, useNavigate } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from "mdb-react-ui-kit";
import resourcesApi from "../pages/information/map/services/backend.js";
import L from "leaflet";

export default function ResourcesList() {

  const [resources_data, setResourceData] = React.useState([
    {
      id: "...",
      title: "...",
      description: "...",
      street: "...",
      number: "...",
      city: "...",
      additionals_comments: "...",
    },
  ]);
  useEffect(() => {
    const getResourceData = resourcesApi.get().then((response) => {
      setResourceData(response.data);
    });
    console.log(resourcesApi.get());
  }, []);

  const customIcon = new L.Icon({
    iconUrl: require("../images/marker.png"),
    iconRetinaUrl: require("../images/marker.png"),
    //iconAnchor: null,
    //popupAnchor: null,
    //shadowUrl: null,
    //shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(20, 30),
    //className: 'leaflet-div-icon'
  });

  return (
    <div>
      
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="6">
            <MDBCard className="mb-4">
              <MDBCardBody>
                  <MDBCol sm="12">
                    <MDBRow>
                      <MapContainer
                        center={[37.358342303352885, -5.986570537333228]}
                        zoom={13}
                        id="map"
                        style={{
                          height: "70vh",
                          margin: "1vw",
                        }}
                      >
                        <TileLayer
                          url={
                            "https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=4Qg1CBLvuefoRWUOrqlJ"
                          }
                        />
                        <Marker icon={customIcon} position={[37.358342303352885, -5.986570537333228]}>
                          <Popup>Marcador</Popup>
                        </Marker>
                      </MapContainer>
                    </MDBRow>
                  </MDBCol>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

            <MDBCol lg="6">
            <MDBCard className="mb-4">
              <MDBCardBody>
                  <MDBCol sm="12">
                    <MDBRow>
                    {resources_data.map(item => (
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <div key={item.id} class="izquierda" >
                          <DropdownButton variant="light" id="dropdown-item-button" width="auto" title={item.title}>
                            <div class="custom-dropdown-item">
                            <Dropdown.Item  as="button"><h5>Descripción:</h5><p>{item.description}</p></Dropdown.Item>
                            <Dropdown.Item  as="button"><h5>Calle:</h5><p>{item.street}</p></Dropdown.Item>
                            <Dropdown.Item  as="button"><h5>Número:</h5><p>{item.number}</p></Dropdown.Item>
                            <Dropdown.Item  as="button"><h5>Ciudad:</h5><p>{item.city}</p></Dropdown.Item>
                            <Dropdown.Item  as="button"><h5>Comentarios adicionales:</h5><p>{item.additionals_comments}</p></Dropdown.Item>
                            </div>              
                          </DropdownButton>
                          </div>
                        </ListGroup.Item>
                    </ListGroup>
                    ))}
                    </MDBRow>
                  </MDBCol>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  </div>
  );
}

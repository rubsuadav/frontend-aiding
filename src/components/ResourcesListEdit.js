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
import "leaflet/dist/leaflet.css";


import Accordion from "react-bootstrap/Accordion";
import { AccordionBody, AccordionHeader } from "reactstrap";

export default function ResourcesListEdit() {

  const [resources_data, setResourceData] = React.useState([
    {
      id: "...",
      title: "...",
      description: "...",
      street: "...",
      number: "...",
      city: "...",
      additionals_comments: "...",
      latitude: "...",
      longitude: "..."
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

  /* const markers = [
    { position: [37.37819890742758, -5.986237173442225], title: "Marcador 1"},
    { position: [37.36389157436658, -5.98052205673053], title: "Marcador 2" },
    { position: [37.38551392139047, -5.972622733550851], title: "Marcador 3" },
    { position: [37.39455877755949, -5.989694735085925], title: "Marcador 4" },
    { position: [37.357317735050124, -5.984544892507049], title: "Marcador 5" },
    { position: [37.3652312981789, -5.992698807621536], title: "Marcador 6" },
    { position: [37.35124555623236, -5.989008088148664], title: "Marcador 7" }
  ]; */
  
  return (
    <section>
      <MDBContainer className="py-5">
        <MDBRow>

          <MDBCol lg="6">
            <MDBCard className="mb-4">

              <MDBCardBody>
                <MDBRow>
                  
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
                        {resources_data.map(item => ( 
                          <Marker icon={customIcon} position={[item.latitude, item.longitude]}> <Popup>{item.title}</Popup>
                          </Marker>
                          ))}
                      </MapContainer>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

              {/* <MDBCol lg="6">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                  
                     
                    <MDBRow>
                      <MDBCol sm="9">
                      {resources_data.map(item => (
                        <MDBCardText className="text-muted">{item.title}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                     )}
                  </MDBCardBody>
                </MDBCard>
             </MDBCol> */}
            
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

import React from "react";
import { events } from "./services/backend";
import { useEffect } from 'react';
import moment from 'moment';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useParams } from "react-router-dom";

function ShowEvent() {

    /*DATOS*/
  const [event_data, setEventData] = React.useState([
    {
    title: '...',
    description: '...',
    start_date: '...',
    end_date: '...',
    places: '...',
    street: '...',
    number: '...',
    city: '...',
    latitude: '...',
    longitude: '...',
    }
  ]);

  const { id } = useParams();


  /*CARGA DE DATOS*/
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await events.get(`/${id}`);
    setEventData(result.data);
  };

  /*FORMATEO DE FECHAS*/
  function formatDate(date) {
    return moment(date).format('DD/MM/YYYY HH:mm');
  };

  

  const customIcon = new L.Icon({
    iconUrl: require("../../images/marker.png"),
    iconRetinaUrl: require("../../images/marker.png"),
    shadowAnchor: null,
    iconSize: new L.Point(20, 30),
  });
  

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
                        center={[event_data.latitude, event_data.longitude]}
                        zoom={13}
                        id="map"
                        style={{
                          height: "70vh",
                          margin: "1vw",
                        }}
                      >
                        <TileLayer
                          url={
                            "https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?callback=initialize&key=4Qg1CBLvuefoRWUOrqlJ"
                          }
                        />
                        <Marker
                          icon={customIcon}
                          position={[event_data.latitude, event_data.longitude]}
                        >
                          <Popup>{event_data.title}</Popup>
                        </Marker>
                      </MapContainer>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="6">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Título</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{event_data.title}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Descripción</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {event_data.description}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Calle</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{event_data.street}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Número</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{event_data.number}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Ciudad</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{event_data.city}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Fecha y hora</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {formatDate(event_data.start_date)} - {formatDate(event_data.end_date)}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Sitios</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {event_data.places}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
      
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default ShowEvent;
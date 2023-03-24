import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from "mdb-react-ui-kit";
import {volunteers} from "./services/backend.js";
import { Button} from "react-bootstrap";
import { Badge, Tag } from 'antd';

export default function Details() {
  let navigate = useNavigate();

  /**Establecer usuario */
  const [user, setUser] = useState({
    name: "",
    last_name: "",
    num_volunteer: "",
    nif: "",
    place: "",
    phone: "",
    email: "",
    state: "",
    situation: "",
    rol: "",
    observations:"",
    computerKnowledge:"",
    truckKnowledge:"",
    warehouseKnowledge:"",
    otherKnowledge:"",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await volunteers.get(`/${id}`);
    setUser(result.data);
  };
  
  
  // FORMATEADOR DE LOS ENUMERADOS
  function volunteerFormatter(value) {
    var formattedValue = value;
    switch (value) {
      case "necesitaFormacion":
        formattedValue = "Necesita Formación";
        return `${formattedValue}`;
      case "necesitaComplemento":
        formattedValue = "Necesita Complemento";
        return `${formattedValue}`;
      case "Ok":
        formattedValue = "Ok";
        return `${formattedValue}`;
      case "Capitan":
        formattedValue = "Capitán";
        return `${formattedValue}`;
      default:
        return value;
    }
  }
  const situation = volunteerFormatter(user.situation);
  const rol = volunteerFormatter(user.rol);

  return (
    <section>
      <MDBContainer className="py-5">
        <center>
        <h2>
          {user.name} {user.last_name}
          </h2></center>
        <hr />
        <MDBRow>
          <MDBCol lg="10"> 
            <MDBRow>
              <MDBCol lg="6">
                <Badge.Ribbon text="Información" color="purple">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Número de Voluntario</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {user.num_volunteer}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Teléfono</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {user.phone}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Email</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {user.email}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </Badge.Ribbon>
              </MDBCol>
              <MDBCol lg="6">
                <Badge.Ribbon text="Conocimientos" color="purple">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                    <MDBRow>
                        <MDBCol sm="4">
                          <MDBCardText>Conocimientos</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="8">
                          <MDBCardText className="text-muted">
                            <Tag color={user.computerKnowledge ? 'green' : 'red'} key={user.computerKnowledge}>
                              Conocimiento tecnológico </Tag>
                            <Tag color={user.truckKnowledge ? 'green' : 'red'} key={user.truckKnowledge}>
                              Manejo de camiones </Tag>
                            <Tag color={user.warehouseKnowledge ? 'green' : 'red'} key={user.warehouseKnowledge}>
                              Gestión de almacenes</Tag>
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="4">
                          <MDBCardText>Otros conocimientos</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="8">
                          <MDBCardText className="text-muted">{user.otherKnowledge}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </Badge.Ribbon>
              </MDBCol>
              <MDBCol lg="12">
                <Badge.Ribbon text="Datos personales" color="purple">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>NIF</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">{user.nif}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Fecha de Nacimiento</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {user.observations}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Sexo</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">{user.num_volunteer}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Dirección</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {user.address}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Población</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {user.place}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Rol</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {rol}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Observaciones</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {user.observations}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Estado</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                          <Tag color={user.state === 'Activo' ? 'green' : 'red'} key={user.state}>
                            {user.state.toUpperCase()}
                          </Tag>
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </Badge.Ribbon>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="2">
            <MDBCard className="mb-4">
              <MDBCardBody>  
                <MDBRow>
                  <MDBCol>
                    <MDBCardText className="text-muted w-auto">
                      <Button
                        onClick={() => {navigate(`/volunteers/update/${id}`)}}
                        type="button" id="button" 
                        className="btn btn-light w-100"
                      >
                        Editar socio
                      </Button>
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
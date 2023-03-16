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
import Communication from "./Communications.js";
import {partners, fileUrl} from "./services/backend.js";

export default function Details() {
  let navigate = useNavigate();

  /**Establecer usuario */
  const [user, setUser] = useState({
    dni: "",
    name: "",
    last_name: "",
    email: "",
    state: "",
    phone1: "",
    province: "",
    iban: "",
    phone2: "",
    birthdate: "",
    sex: "",
    address: "",
    postal_code: "",
    township: "",
    language: "",
    account_holder: "",
    state: "",
  });

  const [donation, setDonation] = useState({
    date: "",
    amount: "",
    periodicity: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
    loadDonation();
  }, []);

  const loadUser = async () => {
    const result = await partners.get(`/${id}`);
    setUser(result.data);
  };

  function createCommunicationRedirect(){
    navigate(`/partners/${id}/communication/create`);
  }

  function createDonationRedirect(){
    navigate(`/partners/${id}/donation/create`);
  }
  
  const loadDonation = async () => {
    const result = await partners.get(`/${id}/donation`);
    setDonation(result.data);
  };

  // FORMATEADOR DE LOS ENUMERADOS
  function partnerFormatter(value) {
    var formattedValue = value;
    switch (value) {
      case "men":
        formattedValue = "Hombre";
        return `${formattedValue}`;
        break;
      case "women":
        formattedValue = "Mujer";
        return `${formattedValue}`;
        break;
      case "none":
        formattedValue = "Ninguno";
        return `${formattedValue}`;
        break;
      case "spanish":
        formattedValue = "Español";
        return `${formattedValue}`;
        break;
      case "catalan":
        formattedValue = "Catalán";
        return `${formattedValue}`;
        break;
    }
  }

  function donationFormatter(value) {
    var formattedValue = value;
    switch (value) {
      case "MENSUAL":
        formattedValue = "Mensual";
        return `${formattedValue}`;
        break;
      case "TRIMESTRAL":
        formattedValue = "Trimestral";
        return `${formattedValue}`;
        break;
      case "SEMESTRAL":
        formattedValue = "Semestral";
        return `${formattedValue}`;
        break;
    
      case "ANUAL":
        formattedValue = "Anual";
        return `${formattedValue}`;
        break; 
      }
    }

  const sex = partnerFormatter(user.sex);
  const language = partnerFormatter(user.language);
  const periodicity = donationFormatter(donation.periodicity);

  return (
    <section>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="5">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Nombre</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user.name}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Apellidos</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user.last_name}
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
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Teléfono 1</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user.phone1}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Teléfono 2</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user.phone2}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>DNI</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.dni}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Fecha de Nacimiento</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user.birthdate}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Sexo</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{sex}</MDBCardText>
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
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="5">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Código Postal</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user.postal_code}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Municipio</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user.township}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Provincia</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user.province}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Idioma</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {language}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>IBAN</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user.iban}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Titular cuenta</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user.account_holder}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Importe</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{donation.amount}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Periodicidad</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{periodicity}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Registro Donación</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user.state}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="2">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol>
                    <MDBCardText className="text-muted w-auto">
                      <a  href={fileUrl + `/partners/${user.id}/receipt`} type="button" id="button" className="btn btn-light w-100">
                        Generar recibo
                      </a>
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol>
                    <MDBCardText className="text-muted w-auto">
                      <a href="" type="button" id="button" className="btn btn-light w-100">
                        Generar certificado
                      </a>
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol>
                    <MDBCardText className="text-muted w-auto">
                      <a
                        onClick={() => {navigate(`/partners/update/${id}`)}}
                        type="button" id="button" 
                        className="btn btn-light w-100"
                      >
                        Editar socio
                      </a>
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol>
                    <MDBCardText className="text-muted w-auto">
                      <a onClick={createCommunicationRedirect} type="button" id="button" className="btn btn-light w-100">
                        Añadir nueva comunicación
                      </a>
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol>
                    <MDBCardText className="text-muted w-auto">
                      <a onClick={createDonationRedirect} type="button" id="button" className="btn btn-light w-100">
                        Gestionar Donación
                      </a>
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard className="mb-4 mb-md-0">
              <MDBCardBody>
                <MDBCardText><h4>COMUNICACIONES</h4></MDBCardText>

                <Communication user_id={id}/>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}


import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow
} from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  function redirectNoticias() {
    navigate("/information/sections");
  }

  function redirectRecursos() {
    navigate("/information/map-resources");
  }

  function redirectMayores() {
    navigate("/events/programed");
  }

  return (
    <MDBContainer className="py-4">
      <center><h1>Bienvenidos</h1></center>
      <center><h3 className="mb-4">Explora nuestras secciones</h3></center>
      <MDBRow className="g-6 justify-content-evenly">
        <MDBCol md="4">
          <MDBCard className="shadow">
              <MDBCardImage onClick={redirectNoticias} src='../stock.jpg' fluid alt='Foto de <a href="https://unsplash.com/@betrue?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aleksandar Velickovic</a> en <a href="https://unsplash.com/es/fotos/AG2ujwcYHGE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            <MDBCardBody>
              <MDBCardTitle>Inventario</MDBCardTitle>
              <MDBCardText>
                Gestionar el inventario de recursos de la asociación. 
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        
        <MDBCol md="4">
        <MDBCard className="shadow">
              <MDBCardImage onClick={redirectMayores} src='../voluntarios.jpg' fluid alt='Foto de <a href="https://unsplash.com/@vladsargu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vlad Sargu</a> en <a href="https://unsplash.com/es/fotos/ItphH2lGzuI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            <MDBCardBody>
              <MDBCardTitle>Voluntarios</MDBCardTitle>
              <MDBCardText>
                Gestionar los voluntarios de la asociación.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;
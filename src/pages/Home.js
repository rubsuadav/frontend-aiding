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
    navigate("/admin/volunteers");
  }

  function redirectRecursos() {
    navigate("/information/map-resources");
  }

  function redirectMayores() {
    navigate("/admin/partners");
  }

  return (
    <MDBContainer className="py-4">
      <center><h1 className="mb-4">Bienvenidos</h1></center>
      <center><h3></h3></center>
      <MDBRow className="g-6 justify-content-evenly">
        <MDBCol md="3">
          <MDBCard className="shadow">
              <MDBCardImage onClick={redirectNoticias} src='../voluntarios.png' fluid alt='Foto de <a href="https://unsplash.com/@betrue?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aleksandar Velickovic</a> en <a href="https://unsplash.com/es/fotos/AG2ujwcYHGE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            <MDBCardBody>
              <MDBCardTitle>Voluntarios</MDBCardTitle>
              <MDBCardText>
                Gestiona los voluntarios de tu organización. 
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="3">
        <MDBCard className="shadow">
              <MDBCardImage onClick={redirectMayores} src='../socios.png' fluid alt='Foto de <a href="https://unsplash.com/@vladsargu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vlad Sargu</a> en <a href="https://unsplash.com/es/fotos/ItphH2lGzuI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            <MDBCardBody>
              <MDBCardTitle>Socios</MDBCardTitle>
              <MDBCardText>
                Gestiona los socios de tu organización.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;
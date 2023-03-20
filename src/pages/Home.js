import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCol,
  MDBContainer,
  MDBRow
} from 'mdb-react-ui-kit';

function Home() {
  return (
    <MDBContainer className="py-4">
      <center><h1>Bienvenidos</h1></center>
      <center><h3>Explora nuestras secciones</h3></center>
      <MDBRow className="g-6">
        <MDBCol md="4">
          <MDBCard className="shadow">
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src='../noticias.jpg' fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Noticias</MDBCardTitle>
              <MDBCardText>
                Un apartado con las últimas noticias veraces y contrastadas. 
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4">
        <MDBCard className="shadow">
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src='../recursos.jpg' fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Recursos</MDBCardTitle>
              <MDBCardText>
                Un apartado con los recursos más útiles para la comunidad.  
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4">
        <MDBCard className="shadow">
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src='../mayores.jpg' fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Mayores que molan</MDBCardTitle>
              <MDBCardText>
                Noticias sobre personas mayores que hacen cosas increíbles. 
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;
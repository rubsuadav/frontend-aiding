import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

import NavDropdown from "react-bootstrap/NavDropdown";

// Icon to share Aiding
import { FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

import {
  BsFillDoorClosedFill,
  BsEnvelopeFill,
  BsFillSendFill,
} from "react-icons/bs";


function Footer() {
  let navigate = useNavigate();

  function handleContact() {
    navigate("/base/contacts/CreateContact");
  }

  function handleTerms() {
    navigate("policies/terms");
  }

  function handleSLAs() {
    navigate("policies/slas");
  }

  /*  Compartir Aiding */
  const shareText = "¿Necesitas una página web a medida para tu negocio? Con Aiding puedes tener la tuya en un abrir y cerrar de ojos. Echa un vistazo a nuestra página de ejemplo: https://aiding-383619.ew.r.appspot.com/ y descubre lo que podemos hacer por ti. ¡Visítanos en https://aiding-web.vercel.app/ para saber más!";
  const urlT = `https://twitter.com/intent/tweet?text=${shareText}`;
  const urlW = `https://wa.me/?text=${shareText}`;

  return (
    <footer
      id="sticky-footer"
      className="flex-shrink-0 py-4 bg-dark text-white-50"
    >
      <section className="">
        <MDBContainer className="text-center text-md-start mt-2">
          <MDBRow className="mt-2">
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Condiciones de uso
              </h6>
              <p>
                <a onClick={handleTerms} id="contacto">
                  Políticas y términos de uso
                </a>
              </p>
              <p>
                <a onClick={handleSLAs} id="contacto">
                  SLAs
                </a>
              </p>
              <p>
                <a id="contacto">
                  <NavDropdown title="Compartir Aiding" id="nav-dropdown">
                    <NavDropdown.Item
                      href={urlT}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FaTwitter /> En Twitter
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      href={urlW}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FaWhatsapp /> En WhatsApp
                    </NavDropdown.Item>
                  </NavDropdown>
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p>
                <span class="footer-icon">
                  <BsFillDoorClosedFill />
                </span>
                Avenida Reina Mercedes, Sevilla
              </p>
              <p>
                <span class="footer-icon">
                  <BsEnvelopeFill />
                </span>
                AidingSevilla@outlook.es
              </p>
              <p>
                <BsFillSendFill />{" "}
                <a onClick={handleContact} id="contacto">
                  Contacta con nosotros
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        <small>Copyright &copy; {new Date().getFullYear()} Aiding</small>
      </div>
    </footer>
  );
}

export default Footer;

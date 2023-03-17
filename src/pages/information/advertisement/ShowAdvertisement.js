import "../../../App.css";
import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from "sweetalert";
import { advertisementBE, mediaUrl } from "./services/backend.js";
import { useParams, useNavigate, Link } from "react-router-dom";
import SafeHTML from "../../../components/SanitizeHTML";
import { Button } from "react-bootstrap";

const successMsg = {
  title: "Mensaje de confirmación",
  text: "Te confirmamos que el artículo se ha eliminado correctamente",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
};

const errorMsg = {
  title: "Mensaje de error",
  text: "Se ha producido un error al eliminar el artículo",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
};

export default function ShowAdvertisement() {
  let navigate = useNavigate();

  /* Data */
  const { id } = useParams();
  const [advertisement, setAdvertisement] = useState({
    title: "",
    abstract: "",
    body: "",
    url: "",
    creation_date: "",
    section: "",
    front_page: "default.jpg",
  });

  const { title, abstract, body, creation_date, url, section, front_page } =
    advertisement;

  /* Functions */
  function deleteAdvertisement() {
    advertisementBE
      .delete(`${id}`)
      .then(() => {
        navigate("/admin/information/advertisements");
        swal(successMsg);
      })
      .catch((error) => {
        swal(errorMsg);
      });
  }

  const deleteConfirmationAlert = async () => {
    swal({
      title: "Eliminar recurso",
      text: "¿Estás seguro que desea eliminar el articulo?",
      icon: "warning",
      buttons: ["No", "Sí"],
    }).then((res) => {
      if (res) {
        deleteAdvertisement();
      }
    });
  };

  useEffect(() => {
    const getAdvertisement = advertisementBE.get(`${id}`).then((response) => {
      setAdvertisement(response.data);
    });
  }, []);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Link
          className="btn btn-outline-primary col-4 mb-4 mx-2"
          to={`admin/information/advertisements/${id}/update`}
        >
          Modificar artículo
        </Link>
        <Button
          className="col-4 mb-4 mx-2"
          variant="danger"
          onClick={() => deleteConfirmationAlert()}
        >
          Eliminar artículo
        </Button>
        <Col lg={6} className="align-self-center shadow mb-5">
          <Row className="">
            <h1 className="title" style={{ textAlign: "left" }}>
              <strong>{title}</strong>
            </h1>
          </Row>

          <hr />

          <Row>
            <Col>
              <Row>
                <p className="text-muted" style={{ textAlign: "justify" }}>
                  {abstract}
                </p>
              </Row>
              <Row className="justify-content-between">
                <p className="text-muted" style={{ width: "auto" }}>
                  <i>{creation_date && parseDate(creation_date)}</i>
                </p>
                {url && (
                  <a href={url} style={{ width: "auto" }}>
                    Link a la noticia original
                    <i class="bi bi-box-arrow-up-right"></i>
                  </a>
                )}
              </Row>
            </Col>
          </Row>

          <hr />

          <Row className="justify-content-center">
            <Image
              style={{
                display: "block",
                width: "100%",
                height: "auto",
              }}
              className=""
              fluid={true}
              src={`${mediaUrl}${front_page}`}
            />
          </Row>

          <hr />

          <Row>
            <SafeHTML html={body} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function parseDate(dateString) {
  const isoDate = new Date(dateString);
  const hours = isoDate.getUTCHours().toString().padStart(2, "0");
  const minutes = isoDate.getUTCMinutes().toString().padStart(2, "0");
  const day = isoDate.getUTCDate().toString().padStart(2, "0");
  const month = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(
    isoDate
  );
  const year = isoDate.getUTCFullYear();
  return `${hours}:${minutes} - ${day} ${month} ${year}`;
}

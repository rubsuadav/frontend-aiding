import "../../../App.css";
import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { advertisementBE, mediaUrl } from "./services/backend.js";
import { useParams, Link } from "react-router-dom";
import SafeHTML from "../../../components/SanitizeHTML";



export default function ShowAdvertisement() {
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

  const { title, abstract, body, creation_date, url, front_page } =
    advertisement;

  /* Functions */
  useEffect(() => {
    advertisementBE.get(`${id}`).then((response) => {
      setAdvertisement(response.data);
    });
  }, []);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
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
      <Row className="justify-content-center">
        <Link
          className="btn btn-outline-primary col-4 mb-4 mx-2"
          to={`/admin/information/advertisements/${id}/update`}
        >
          Modificar artículo
        </Link>
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

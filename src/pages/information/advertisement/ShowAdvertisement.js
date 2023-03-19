import "../../../App.css";
import React, { useState, useEffect, useRef } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { advertisementBE, sectionBE, mediaUrl } from "./services/backend.js";
import { useParams, Link, useNavigate } from "react-router-dom";
import SafeHTML from "../../../components/SanitizeHTML";

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
    section_id: "",
    section_id__name: "",
    front_page: "default.jpg",
  });

  const [sectionAdvertisements, setSectionAdvertisements] = useState([]);

  const {
    title,
    abstract,
    section_id,
    section_id__name,
    body,
    creation_date,
    url,
    front_page,
  } = advertisement;

  /* Functions */
  useEffect(() => {
    advertisementBE.get(`${id}`).then((response) => {
      setAdvertisement(response.data);
    });
  }, [id]);

  const firstLoad = useRef(true);
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
    } else {
      sectionBE.get(`/${section_id}/advertisements/`).then((response) => {
        setSectionAdvertisements(response.data);
        console.log(response.data);
      });
    }
  }, [advertisement]);

  return (
    <Container>
      <Row className="mt-5">
        <Col lg={6} className="align-self-center shadow mb-5 offset-lg-2">
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
          <Row className="justify-content-center">
            <Link
              className="btn btn-outline-primary col-4 mb-4 mx-2"
              to={`/admin/information/advertisements/${id}/update`}
            >
              Modificar artículo
            </Link>
          </Row>
        </Col>
        <Col className="mb-5 mx-3">
          <Row className="">
            <h5 className="title" style={{ textAlign: "center" }}>
              <strong>Más noticias de {section_id__name}</strong>
            </h5>
          </Row>
          <hr />
          {sectionAdvertisements.map((adv) => (
            <div
              onClick={() => {
                navigate(`/information/advertisements/${adv.id}`);
              }}
              className="shadow w-auto mb-3"
              style={{ cursor: "pointer" }}
            >
              <Row>
                <Col
                  style={{ maxHeight: "6rem" }}
                  className="m-1"
                  align="center"
                  xs={5}
                >
                  <Image
                    style={{
                      display: "block",
                      width: "auto",
                      height: "auto",
                      maxHeight: "inherit",
                    }}
                    className="border"
                    fluid={true}
                    src={`${mediaUrl}${adv.front_page}`}
                  />
                </Col>
                <Col
                  style={{ maxHeight: "6rem", maxWidth: "auto" }}
                  className="my-2"
                >
                  <h6
                    className="title me-2"
                    style={{
                      textAlign: "left",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical",
                      textAlign: "justify",
                    }}
                  >
                    <strong>{adv.title}</strong>
                  </h6>
                </Col>
              </Row>
            </div>
          ))}
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

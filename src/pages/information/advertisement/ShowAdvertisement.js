import "../../../App.css";
import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { advertisementBE, mediaUrl } from "./services/backend.js";
import { useParams, useNavigate } from "react-router-dom";

export default function ShowAdvertisement() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [advertisement, setAdvertisement] = useState({
    title: "",
    description: "",
    url: "",
    section: "",
    front_page: "default.jpg",
  });

  const { title, description, url, section, front_page } = advertisement;

  useEffect(() => {
    const getAdvertisement = advertisementBE.get(`${id}`).then((response) => {
      setAdvertisement(response.data);
    });
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="p-4" align="center">
          <h1 class="title">{title}</h1>
          <a href={url} >Link a la noticia original<i class="bi bi-box-arrow-up-right"></i></a>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="p-2" align="center">
          <Image
            style={{
              
              display: "block",
              width: "auto",
              height: "auto",
            }}
            className="border"
            fluid={true}
            src={`${mediaUrl}${front_page}`}
          />
        </Col>
        <Col sm={5} className="p-1">
          <p>{description}</p>
        </Col>

        <p>{description}</p>
        <p>{description}</p>
        <p>{description}</p>
      </Row>
    </Container>
  );
}

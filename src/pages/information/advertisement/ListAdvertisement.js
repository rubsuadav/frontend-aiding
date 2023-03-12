import "../../../App.css";
import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { advertisementBE, sectionBE, mediaUrl } from "./services/backend.js";
import { useParams, useNavigate } from "react-router-dom";

export default function ListAdvertisement() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [advertisements, setAdvertisements] = useState([
    {
      title: "",
      description: "",
      url: "",
      section: "",
      front_page: "default.jpg",
    },
  ]);

  const [sections, setSections] = useState([
    {
      id: " ",
      name: " ",
    },
  ]);

  useEffect(() => {
    sectionBE.get().then((response) => {
      setSections(response.data);
    });

    if (id != null) {
      sectionBE
        .get(`/${id}/advertisements/`)
        .then((response) => {
          setAdvertisements(response.data);
        })
        .catch((error) => {
          navigate("/information/sections");
        });
    } else {
      advertisementBE.get().then((response) => {
        setAdvertisements(response.data);
      });
    }
  }, [id]);

  return (
    <>
      <Container fluid="true">
        <Row id="sections">
          <Col
            onClick={() => {
              navigate(`/information/sections`);
            }}
            className="section p-3 d-block text-bg-dark"
            style={{ cursor: "pointer" }}
          >
            Todas las noticias
          </Col>
          {sections.map((section, index) => (
            <Col
              onClick={() => {
                navigate(`/information/sections/${section.id}`);
              }}
              className="section p-3 d-block text-bg-dark"
              style={{ cursor: "pointer" }}
            >
              {section.name}
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col>
            {advertisements.map((adv, index) => (
              <div
                onClick={() => {
                  navigate(`/information/advertisements/${adv.id}`);
                }}
                className="shadow-lg w-auto my-5"
                style={{ cursor: "pointer" }}
              >
                <Row>
                  <Col md={4} className="p-4" align="center">
                    <Image
                      style={{
                        maxHeight: "10rem",
                        display: "block",
                        width: "auto",
                        height: "auto",
                      }}
                      className="border"
                      fluid={true}
                      src={`${mediaUrl}${adv.front_page}`}
                    />
                  </Col>
                  <Col className="p-5">
                    <h3 class="title">{adv.title}</h3>
                    <p
                      style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: "3",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {adv.description}
                    </p>
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

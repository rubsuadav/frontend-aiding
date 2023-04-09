import "../../../App.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// React Bootstrap
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Local imports
import { advertisementBE, sectionBE, mediaUrl } from "./services/backend.js";

export default function ListAdvertisement() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [advertisements, setAdvertisements] = useState([
    {
      title: "",
      abstract: "",
      url: "",
      section: "",
      creation_date: "",
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
          {sections.map((section) => (
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
          <Col className="col-10">
            {advertisements.map((adv) => (
              <Card
                onClick={() => {
                  navigate(`/information/advertisements/${adv.id}`);
                }}
                className="shadow w-auto my-5"
                style={{ cursor: "pointer" }}
              >
                <Row>
                  <Col xl={5} className="">
                    <Card.Img
                      variant="top"
                      className="pr-5"
                      src={`${mediaUrl}${adv.front_page}`}
                    />
                  </Col>
                  <Col className="m-2">
                    <Card.Body>
                      <Card.Title><strong>{adv.title}</strong></Card.Title>

                      <hr />
                      <Card.Text
                        style={{
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: "3",
                          WebkitBoxOrient: "vertical",
                          textAlign: "justify",
                        }}
                      >
                        {adv.abstract}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

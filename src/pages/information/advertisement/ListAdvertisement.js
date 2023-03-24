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
              <div
                onClick={() => {
                  navigate(`/information/advertisements/${adv.id}`);
                }}
                className="shadow w-auto my-5"
                style={{ cursor: "pointer" }}
              >
                <Row>
                  <Col xl={5} className="m-1" align="center">
                    <Image
                      style={{
                        display: "block",
                        width: "auto",
                        height: "auto",
                        maxHeight: "18rem",
                      }}
                      className="border"
                      fluid={true}
                      src={`${mediaUrl}${adv.front_page}`}
                    />
                  </Col>
                  <Col className="m-2">
                    <h3 class="title" style={{ textAlign: "left" }}>
                      <strong>{adv.title}</strong>
                    </h3>
                    <hr />
                    <p
                      style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: "3",
                        WebkitBoxOrient: "vertical",
                        textAlign: "justify",
                      }}
                    >
                      {adv.abstract}
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

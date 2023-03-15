import "../../../App.css";
import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { advertisementBE, sectionBE, mediaUrl } from "./services/backend.js";
import { useParams, useNavigate } from "react-router-dom";

const dummy_advertisements = [
  {
    title: "Una noticia aleatoria con un título relativamente largo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum neque imperdiet leo tristique, vel tincidunt sem mattis. Vestibulum eget posuere diam, eu aliquam ex. Maecenas sagittis, orci ut porttitor dapibus, urna nulla semper nunc, in hendrerit dui dui quis mi. Mauris id neque luctus, tincidunt tellus quis, efficitur metus. Mauris et magna gravida, ornare ligula sed, bibendum felis. Morbi eu varius orci. Sed in sagittis ligula, eget tempor est. Pellentesque at ex ipsum. Praesent eros nulla, interdum eget tincidunt eget, eleifend eu sapien. Nulla iaculis, neque nec fermentum mattis, mauris nibh suscipit dolor, id ornare tellus sapien eu lectus. Vestibulum a nisl efficitur, euismod erat a, mattis purus. Vivamus tristique mauris sit amet convallis imperdiet. Nunc id quam placerat nibh consectetur tincidunt vulputate vel lectus. Duis efficitur lectus eget risus mollis egestas. Mauris pretium urna nibh, quis ornare diam dictum id. Vestibulum quis nisl sed ligula volutpat tempus vel in mi.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam in ultricies orci. Morbi dignissim mattis justo quis tempus. Proin purus nunc, maximus id efficitur id, tristique et felis. Etiam quis dolor nisl. Quisque blandit quis tortor et tincidunt. Sed nec nisi quis dui mattis bibendum id euismod lacus. Vestibulum malesuada, libero quis dapibus egestas, dui massa aliquet ligula, in mollis est augue nec diam. Pellentesque blandit tellus mi, a feugiat orci scelerisque ut. Vivamus condimentum mi vel massa venenatis, vel maximus dui vehicula. Maecenas efficitur diam consectetur suscipit rutrum. Cras luctus lacus felis, quis blandit mauris laoreet id. Mauris porttitor porta magna, sed gravida erat commodo eu. Ut porta nec elit nec facilisis. Quisque auctor nec dui quis interdum. ",
    url: "https://www.google.com/",
    section: "1",
    front_page: `https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg`,
  },
  {
    title: "Una noticia aleatoria con un título relativamente largo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum neque imperdiet leo tristique, vel tincidunt sem mattis. Vestibulum eget posuere diam, eu aliquam ex. Maecenas sagittis, orci ut porttitor dapibus, urna nulla semper nunc, in hendrerit dui dui quis mi. Mauris id neque luctus, tincidunt tellus quis, efficitur metus. Mauris et magna gravida, ornare ligula sed, bibendum felis. Morbi eu varius orci. Sed in sagittis ligula, eget tempor est. Pellentesque at ex ipsum. Praesent eros nulla, interdum eget tincidunt eget, eleifend eu sapien. Nulla iaculis, neque nec fermentum mattis, mauris nibh suscipit dolor, id ornare tellus sapien eu lectus. Vestibulum a nisl efficitur, euismod erat a, mattis purus. Vivamus tristique mauris sit amet convallis imperdiet. Nunc id quam placerat nibh consectetur tincidunt vulputate vel lectus. Duis efficitur lectus eget risus mollis egestas. Mauris pretium urna nibh, quis ornare diam dictum id. Vestibulum quis nisl sed ligula volutpat tempus vel in mi.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam in ultricies orci. Morbi dignissim mattis justo quis tempus. Proin purus nunc, maximus id efficitur id, tristique et felis. Etiam quis dolor nisl. Quisque blandit quis tortor et tincidunt. Sed nec nisi quis dui mattis bibendum id euismod lacus. Vestibulum malesuada, libero quis dapibus egestas, dui massa aliquet ligula, in mollis est augue nec diam. Pellentesque blandit tellus mi, a feugiat orci scelerisque ut. Vivamus condimentum mi vel massa venenatis, vel maximus dui vehicula. Maecenas efficitur diam consectetur suscipit rutrum. Cras luctus lacus felis, quis blandit mauris laoreet id. Mauris porttitor porta magna, sed gravida erat commodo eu. Ut porta nec elit nec facilisis. Quisque auctor nec dui quis interdum. ",
    url: "https://www.google.com/",
    section: "1",
    front_page: `https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg`,
  },
];

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
    /* sectionBE.get().then((response) => {
      setSections(response.data); 
    });*/

    setAdvertisements(dummy_advertisements);

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
          <Col className="col-10">
            {advertisements.map((adv, index) => (
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
                      }}
                      className="border"
                      fluid={true}
                      src={`${adv.front_page}`}
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

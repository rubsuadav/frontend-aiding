import "../../../App.css";
import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { advertisementBE, mediaUrl } from "./services/backend.js";
import { useParams, useNavigate } from "react-router-dom";
import SafeHTML from "../../../components/SanitizeHTML";

/* const dummy_advertisement = {
  title: "Una noticia aleatoria con un título relativamente largo",
  abstract:
    "Estos es un resumen de la noticia, que es bastante corto, pero no tan corto como el título. Estos es un resumen de la noticia, que es bastante corto.",
  body: `<h1 class="text-muted">Lorem ipsum dolor sit amet</h1> <p style="text-align: justify">Consectetur adipiscing elit. Pellentesque rutrum neque imperdiet leo tristique, vel tincidunt sem mattis. Vestibulum eget posuere diam, eu aliquam ex. Maecenas sagittis, orci ut porttitor dapibus, urna nulla semper nunc, in hendrerit dui dui quis mi.</p> <p style="text-align: right">Mauris id neque luctus, tincidunt tellus quis, efficitur metus. Mauris et magna gravida, ornare ligula sed, bibendum felis. Morbi eu varius orci. Sed in sagittis ligula, eget tempor est. Pellentesque at ex ipsum. Praesent eros nulla, interdum eget tincidunt eget, eleifend eu sapien. Nulla iaculis, neque nec fermentum mattis, mauris nibh suscipit dolor, id ornare tellus sapien eu lectus. Vestibulum a nisl efficitur, euismod erat a, mattis purus. Vivamus tristique mauris sit amet convallis imperdiet. Nunc id quam placerat nibh consectetur tincidunt vulputate vel lectus. Duis efficitur lectus eget risus mollis egestas. Mauris pretium urna nibh, quis ornare diam dictum id. Vestibulum quis nisl sed ligula volutpat tempus vel in mi.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam in ultricies orci. Morbi dignissim mattis justo quis tempus. Proin purus nunc, maximus id efficitur id, tristique et felis. Etiam quis dolor nisl. Quisque blandit quis tortor et tincidunt. Sed nec nisi quis dui mattis bibendum id euismod lacus. Vestibulum malesuada, libero quis dapibus egestas, dui massa aliquet ligula, in mollis est augue nec diam. Pellentesque blandit tellus mi, a feugiat orci scelerisque ut. Vivamus condimentum mi vel massa venenatis, vel maximus dui vehicula. Maecenas efficitur diam consectetur suscipit rutrum. Cras luctus lacus felis, quis blandit mauris laoreet id. Mauris porttitor porta magna, sed gravida erat commodo eu. Ut porta nec elit nec facilisis. Quisque auctor nec dui quis interdum.</p>`,
  url: "https://www.google.com/",
  section: "1",
  date: "2021-05-01",
  front_page: `https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg`,
}; */

export default function ShowAdvertisement() {
  let navigate = useNavigate();
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

  useEffect(() => {
    const getAdvertisement = advertisementBE.get(`${id}`).then((response) => {
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

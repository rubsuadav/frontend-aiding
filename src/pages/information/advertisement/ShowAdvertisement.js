import "../../../App.css";
import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { advertisementBE, mediaUrl } from "./services/backend.js";
import { useParams, useNavigate } from "react-router-dom";

const dummy_advertisement = {
  title: "Una noticia aleatoria con un título relativamente largo",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum neque imperdiet leo tristique, vel tincidunt sem mattis. Vestibulum eget posuere diam, eu aliquam ex. Maecenas sagittis, orci ut porttitor dapibus, urna nulla semper nunc, in hendrerit dui dui quis mi. Mauris id neque luctus, tincidunt tellus quis, efficitur metus. Mauris et magna gravida, ornare ligula sed, bibendum felis. Morbi eu varius orci. Sed in sagittis ligula, eget tempor est. Pellentesque at ex ipsum. Praesent eros nulla, interdum eget tincidunt eget, eleifend eu sapien. Nulla iaculis, neque nec fermentum mattis, mauris nibh suscipit dolor, id ornare tellus sapien eu lectus. Vestibulum a nisl efficitur, euismod erat a, mattis purus. Vivamus tristique mauris sit amet convallis imperdiet. Nunc id quam placerat nibh consectetur tincidunt vulputate vel lectus. Duis efficitur lectus eget risus mollis egestas. Mauris pretium urna nibh, quis ornare diam dictum id. Vestibulum quis nisl sed ligula volutpat tempus vel in mi.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam in ultricies orci. Morbi dignissim mattis justo quis tempus. Proin purus nunc, maximus id efficitur id, tristique et felis. Etiam quis dolor nisl. Quisque blandit quis tortor et tincidunt. Sed nec nisi quis dui mattis bibendum id euismod lacus. Vestibulum malesuada, libero quis dapibus egestas, dui massa aliquet ligula, in mollis est augue nec diam. Pellentesque blandit tellus mi, a feugiat orci scelerisque ut. Vivamus condimentum mi vel massa venenatis, vel maximus dui vehicula. Maecenas efficitur diam consectetur suscipit rutrum. Cras luctus lacus felis, quis blandit mauris laoreet id. Mauris porttitor porta magna, sed gravida erat commodo eu. Ut porta nec elit nec facilisis. Quisque auctor nec dui quis interdum. ",
  url: "https://www.google.com/",
  section: "1",
  front_page: `https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg`,
};

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
    /* const getAdvertisement = advertisementBE.get(`${id}`).then((response) => {
      setAdvertisement(response.data);
    }); */
    setAdvertisement(dummy_advertisement);
  }, []);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col lg={6} className="align-self-center">
          <Row className="">
            <h1 className="title" style={{ textAlign: "left" }}>
              {title}
            </h1>
          </Row>

          <Row>
            <a href={url}>
              Link a la noticia original
              <i class="bi bi-box-arrow-up-right"></i>
            </a>
          </Row>

          <Row className="justify-content-center">
            <Image
              style={{
                display: "block",
                width: "100%",
                height: "auto",
              }}
              className="mt-5"
              fluid={true}
              src={`${front_page}`}
            />
          </Row>
          <hr />
          <Row>
            <p>{description}</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

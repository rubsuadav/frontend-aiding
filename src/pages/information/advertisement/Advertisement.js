import "../../../App.css";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import News from "./News";
import advertisementBE ,{ sectionBE } from "./services/backend.js";
import { useParams, useNavigate } from "react-router-dom";
import Section from "./Section";

export default function Advertisement() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [advertisement, setAdvertisement] = useState([
    {
      title: " ",
      description: " ",
      url: " ",
      section: " ",
      front_page: " ",
    },
  ]);

  useEffect(() => {
    if (id != null){
      const getAdvertisements = sectionBE
      .get(`/${id}/advertisements/`)
      .then((response) => {
        setAdvertisement(response.data);
        });}
    else{const getAdvertisements = advertisementBE
      .get()
      .then((response) => {
        setAdvertisement(response.data);
        }); }
      });


  const [section, setSection] = useState([
    {
      id: " ",
      name: " ",
    },
  ]);
  useEffect(() => {
    const getSections = sectionBE.get().then((response) => {
      setSection(response.data);
    });
  }, []);
  return (
    <div>
      <div id="sections" class="row is-mobile">
        {section.map((sec, index) => (
          <Section class="adv-card mt-3" section={sec}>
            {" "}
          </Section>
        ))}{" "}
      </div>

      {advertisement.map((adv, index) => (
        <News class="adv-card" advertisement={adv}>
          {" "}
        </News>
      ))}
    </div>
  );
}

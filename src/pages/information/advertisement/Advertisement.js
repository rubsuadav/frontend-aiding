import '../../../App.css';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState,useEffect } from 'react'
import News from './News'
import axios from "axios";
import  advertisementBE,{sectionBE} from "./services/backend.js";
import { Link } from 'react-router-dom';
import Section from './Section';

export default function Advertisement() {
    let prueba = {
        title : "Titulo",
        description : "Esta es una descripcion",
    }
    const [advertisement, setAdvertisement] = useState([
      {
        title : " ",
        description : " ",
        url : " ",
        section : " ",
        front_page:" ",
      }
    ]);
    useEffect(() => { //To-be changed, this needs to be a call to the api asking for the advertisements of a section, 
      // So, the default url should also be changed and the url on section to match the default url. 
      const getAdvertisements =  advertisementBE.get().then((response)=> {setAdvertisement(response.data);});
      console.log(getAdvertisements.get);
    }, []);

    const [section, setSection] = useState([
      {
        name : " ",
      }
    ]);
    useEffect(() => {
      const getSections =  sectionBE.get().then((response)=> {setSection(response.data);});
      console.log(getSections.get);
    }, []);

  return (
    <div>
        <div id="sections" class="container">
        {section.map((sec,index)=>(
        <Section class="adv-card mt-3" section={sec}> </Section>))
        } </div>

        {advertisement.map((adv,index)=>(
        <News class="adv-card" advertisement={adv} > </News>))
        }
        </div>
  )
}

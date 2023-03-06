import '../../../App.css';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState,useEffect } from 'react'
import News from './News'
import axios from "axios";
import backendApi from "./services/backend.js";

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
      }
    ]);

    useEffect(() => {
      const getAdvertisements =  backendApi.get().then((response)=> {setAdvertisement(response.data);});
      console.log(getAdvertisements.get);
    }, []);

  return (
    <div>
        <p>Advertisement</p>
        {advertisement.map((adv,index)=>(
        <News href={`/${index}`} class="adv-card" advertisement={adv} > </News>))
        }
        </div>
  )
}

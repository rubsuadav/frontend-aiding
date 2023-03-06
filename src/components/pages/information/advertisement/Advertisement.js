import React, { useState,useEffect } from 'react'
import News from './News'
import axios from "axios";
import backendApi from "./services/backend.js";
import './Advertisement.css';
export default function Advertisement() {
    let prueba = {
        title : "Titulo",
        description : "Esta es una descripcion",
    }
    const [advertisement, setAdvertisement] = useState([]);

    useEffect(() => {
        loadAdvertisements();
    }, []);

  const loadAdvertisements = async () => {
    const result = await axios.get(
      "http://localhost:8000/information/advertisements/"
    );
    console.log(result.data);
    setAdvertisement(result.data);
  };
  return (
    <div>
        <p>Advertisement</p>
        {advertisement.map((adv,index)=>(
        <News href={`/${index}`} class="a" advertisement={adv} > </News>))
        }
        </div>
  )
}

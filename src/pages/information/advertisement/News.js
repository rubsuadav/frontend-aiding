import React from 'react'
import { useNavigate } from "react-router-dom";

export default function News(advertisement) {
    let title = advertisement.advertisement.title;
    let description = advertisement.advertisement.description;
    let url = advertisement.advertisement.url;
    let front_page = advertisement.advertisement.front_page;
    let navigate=useNavigate();
    function shortdescription(){
      if (description.length > 250) {
        description= description.substring(0,250)+"..."
      }
    } 
    shortdescription()
    function toNew(){
      navigate("/information/advertisements/"+advertisement.advertisement.id);
    }

  return (
    <div onClick={toNew}  class="adv-card panel panel-default fadeInDown">
      <img src={front_page}></img>
        <h3 class="title"><a class="link-black" >{title}</a></h3>
    <br></br>
    
   <p>{description}</p>
   </div>
  )
}

import React from 'react'

export default function News(advertisement) {
    let title = advertisement.advertisement.title;
    let description = advertisement.advertisement.description;
    let url = advertisement.advertisement.url;
    let front_page = advertisement.advertisement.front_page;

  return (
    <div class="adv-card">
        <h3 class="title"><a class="link-black" href={`/information/advertisements/${advertisement.advertisement.id}`}>{title}</a></h3>
    <br></br>
    <p>{description}</p>
    </div>
  )
}

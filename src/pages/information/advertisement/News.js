import React from 'react'

export default function News(advertisement) {
    let title = advertisement.advertisement.title;
    let description = advertisement.advertisement.description;

  return (
    <div class="adv-card">
        <h3 class="title">{title}</h3>
    <br></br>
    <p>{description}</p>
    </div>
  )
}

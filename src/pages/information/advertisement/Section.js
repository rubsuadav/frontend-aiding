import React from 'react'
export default function Section(section) {

    let name =section.section.name;
    let id = section.section.id;

  return (
    <div class="col" ><a href={`/information/sections/${id}`} class="link-black" > {name}</a></div>
  )
}

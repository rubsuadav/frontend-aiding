import React from 'react'

export default function Section(section) {


    let name =section.section.name;


  return (
    <div class="column-2"><a class="link-black" href={`/information/sections/${section.section.id}`}> {name}</a></div>
  )
}

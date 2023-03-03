import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Listado2() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => setData(response.data))
          .catch(error => console.log(error));
      }, []);

  return (
    <div>
        {data.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}
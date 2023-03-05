/* import { useEffect, useState } from 'react';
import axios from 'axios';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ResourcesListItemAdmin() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
    {items.map(item => (
        <ul>
      <div key={item.id}>
        <p>{item.body}</p>
      </div>
        </ul>
    ))}
    </div>
  );
}
 */
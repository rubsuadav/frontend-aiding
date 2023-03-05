/* import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import {item} from './components/ResourcesListItemAdmin.js';

export default function ResourcesListAdmin({ item }) {

    const handleDelete = (itemId) => {
        axios.delete(`https://api.example.com/items/${itemId}`)
          .then(() => {
            const updatedItems = items.filter(item => item.id !== itemId);
            setItems(updatedItems);
          })
          .catch(error => {
            console.error(error);
          });
      };
    
      const handleEdit = (itemId) => {
        const itemToEdit = items.find(item => item.id === itemId);
        setEditingItem(itemToEdit);
      };
    
      const handleCancelEdit = () => {
        setEditingItem(null);
      };
    
  const handleCreate = (itemData) => {
    axios.post('https://api.example.com/items', itemData)
      .then(response => {
        setItems([...items, response.data]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleUpdate = (itemId, itemData) => {
    axios.put(`https://api.example.com/items/${itemId}`, itemData)
      .then(response => {
        const updatedItem = response.data;
        const updatedItems = items.map(item => {
          if (item.id === updatedItem.id) {
            return updatedItem;
          } else {
            return item;
          }
        });
        setItems(updatedItems);
        setEditingItemId(null);
      })
      .catch(error => {
        console.error(error);
      });
  };

    return (
      <li>
        {item.name} - {item.description}
        <button onClick={handleEdit}>Editar</button>
        <button onClick={handleDelete}>Eliminar</button>
        <button onClick={handleUpdate}>Actualizar</button>
        <button onClick={handleCreate}>Crear</button>
      </li>
    );
  }
  

 */
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

// <TileLayer url={"https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=4Qg1CBLvuefoRWUOrqlJ"} attribution={"https://api.maptiler.com/resources/logo.svg"}/>

// <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

export default function Mapa() {
  
        const [direccion, setDireccion] = useState('');
        const [coordenadas, setCoordenadas] = useState(null);
        
        const handleDireccionChange = (event) => {
          setDireccion(event.target.value);
        }
        
        const handleBuscarClick = async () => {
          try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${direccion}&format=json`);
            if (response.data.length > 0) {
              const { lat, lon } = response.data[0];
              setCoordenadas([lat, lon]);
            } else {
              alert('Dirección no encontrada');
            }
          } catch (error) {
            console.log(error);
          }
        }
    
    return (
    <div>
        <div>
          <label htmlFor="direccion">Dirección: </label>
          <input type="text" id="direccion" value={direccion} onChange={handleDireccionChange} />
          <button onClick={handleBuscarClick}>Buscar</button>
        </div>
        <div>
        {coordenadas && (
          <MapContainer center={coordenadas} zoom={16} style = {{ width: '80vw', height: '60vh', margin: '8vw'}} >
            <TileLayer url={"https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=4Qg1CBLvuefoRWUOrqlJ"} attribution={"https://api.maptiler.com/resources/logo.svg"}/>
            <Marker position={coordenadas}>
              <Popup>
                {direccion}
              </Popup>
            </Marker>
          </MapContainer>
        )}
        </div>
      </div>
  );
}
  

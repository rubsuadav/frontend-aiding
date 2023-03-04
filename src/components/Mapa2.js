import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import  React, { useState } from "react";
import axios from 'axios';

export default function Mapa2() {
    const [direccion, setDireccion] = useState(''); // [37.358342303352885, -5.986570537333228]
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
        <MapContainer
           center={[37.358342303352885, -5.986570537333228]}
           zoom = {100}
           style = {{ width: '20vw', height: '60vh', margin: '8vw'}} >
            <TileLayer url={"https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=4Qg1CBLvuefoRWUOrqlJ"} attribution={"https://api.maptiler.com/resources/logo.svg"}/>
            <Marker position={[37.358342303352885, -5.986570537333228]}>
              <Popup>
                {direccion}
              </Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}

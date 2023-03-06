import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

class Mapa extends Component {
  state = {
    lat: 0,
    lng: 0,
    zoom: 13,
    direccion: '',
  };

  async componentDidMount() {
    const direccion = 'Calle de Ferraz, Madrid, España'; // Dirección de ejemplo
    const { data } = await axios.get(
      `https://nominatim.openstreetmap.org/search?q=${direccion}&format=json&limit=1`
    );
    const { lat, lon } = data[0];
    this.setState({ lat, lng: lon, direccion });
  }

  render() {
    const { lat, lng, zoom, direccion } = this.state;

    return (
      <MapContainer center={[lat, lng]} zoom={zoom} style={{ height: '400px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]}>
          <Popup>{direccion}</Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default Mapa;

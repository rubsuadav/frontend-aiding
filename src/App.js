import './App.css';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { MapContainer } from "react-leaflet";
import ListadoRecursos from './components/ListadoRecursos.js';
import Mapa2 from './components/Mapa2.js';
import Table from 'react-bootstrap/Table';

export default function App() {
  return (
    <div style={{ margin: '40px', padding: '40px'}}>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mapa</th>
          <th>Recursos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Mapa2/></td>
          <td><ListadoRecursos/></td>
          </tr>
      </tbody>
    </Table>
    </div>
  );
}

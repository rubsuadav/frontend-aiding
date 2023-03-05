import './App.css';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { MapContainer } from "react-leaflet";
import ResourcesList from './components/ResourcesList.js';
import Map from './components/Map.js';
import Table from 'react-bootstrap/Table';

export default function App() {
  return (
    <div style={{ margin: '40px', padding: '40px'}}>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th><h4>Mapa</h4></th>
          <th><h4>Recursos</h4></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Map/></td>
          <td><ResourcesList/></td>
          </tr>
      </tbody>
    </Table>
    </div>
  );
}

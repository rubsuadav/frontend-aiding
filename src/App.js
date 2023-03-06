import './App.css';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import MapResource from './information/map/index.js';
import MapResourceAdmin from './components/ResourcesListAdmin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route exact path='/' element={<Inicio/>} />
        <Route exact path='/information/map-resource' element={<MapResource/>} />
        <Route exact path='/information/resource-admin' element={<MapResourceAdmin/>} />
      </Routes>
      </Router>
    </div>
  );
}

import './App.css';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import MapResource from './pages/information/map/index.js';
import EditResource from './components/EditResource.js';
import AddResource from './components/AddResource.js';
//import MapResourceAdmin from './components/ResourcesListAdmin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route exact path='/information/map-resource' element={<MapResource/>} />
        <Route exact path='/information/edit-resource' element={<EditResource/>} />
        <Route exact path='/information/create-resource' element={<AddResource/>} />
      </Routes>
      </Router>
    </div>
  );
}

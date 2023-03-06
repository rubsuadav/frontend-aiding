import './App.css';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importamos los componentes creados
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import MapResource from './pages/information/map/index.js';
import EditResource from './components/EditResource.js';
import AddResource from './components/AddResource.js';
//import MapResourceAdmin from './components/ResourcesListAdmin';

var navLinks= [
    {
      title: "Inicio",
      path: "home"
    },
    {
      title: "Socios",
      path: "partners"
    },
    {
      title: "Recursos",
      path: "information/map-resource"
    }
  ];

var logo=["./boscoglobal-logo.png"]



export default function App() {
  return (
    <div className="App">
    <Router>
      <Navbar navLinks={navLinks} logo={logo}/>
      <Routes>
        <Route exact path='/information/map-resource' element={<MapResource/>} />
        <Route exact path='/information/edit-resource' element={<EditResource/>} />
        <Route exact path='/information/create-resource' element={<AddResource/>} />
      </Routes>
    </Router>
    <Footer/>
  </div>
  );
}

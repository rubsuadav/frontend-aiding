import './App.css';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importamos los componentes creados
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import UpdateResource from './pages/information/map/UpdateResource.js';
import CreateResource from './pages/information/map/CreateResource.js';
import ShowResource from './pages/information/map/ShowResource.js';
import ResourcesTable from './pages/information/map/ResourcesTable.js';

import ResourcesListEdit from './components/ResourcesListEdit';
import ShowResourceUser from './pages/information/map/ShowResourceUser.js';

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
      path: "information/map-resources"
    },
    {
      title: "Admin Resources",
      path: "/information/admin"
    }
  ];

var logo=["./boscoglobal-logo.png"]



export default function App() {
  return (
    <div className="App">
    <Router>
      <Navbar navLinks={navLinks} logo={logo}/>
      <Routes>
        <Route exact path='/information/map-resources' element={<ResourcesListEdit/>} />
        <Route path="/information/map-resources/:id" element={ <ShowResourceUser/>} />

        <Route exact path='/information/edit-resource/:id' element={<UpdateResource/>} />
        <Route exact path='/information/create-resource' element={<CreateResource/>} />
        <Route exact path='/information/admin' element={<ResourcesTable/>} />
        <Route path="/information/resources/:id" element={ <ShowResource/>} />
      </Routes>
    </Router>
    <Footer/>
  </div>
  );
}

import './App.css';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importamos los componentes creados
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/partners/Home";
import Items from "./pages/partners/Items";
import ListAdvertisement from './pages/information/advertisement/ListAdvertisement';
import ShowAdvertisement from './pages/information/advertisement/ShowAdvertisement';
import CreateAdvertisement from './pages/information/advertisement/CreateAdvertisement';
import CreateUpdatePartner from "./pages/partners/createUpdatePartner";
import Home from "./pages/Home";
import ListPartner from "./pages/partners/ListPartner";
import ShowPartner from "./pages/partners/ShowPartner";
import CreatePartner from "./pages/partners/CreatePartner";
import UpdatePartner from "./pages/partners/UpdatePartner";
import CreateCommunication from "./pages/partners/CreateCommunication";
import UpdateCommunication from './pages/partners/UpdateCommunication';
import CreateDonation from './pages/partners/CreateDonation';



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
    /* {
      title: "Crear Socio",
      path: "partners/create"
    }, */
    {
      title: "Noticias",
      path: "information/sections"
    },
    /* {
      title: "Crear Noticia",
      path: "information/advertisements/create"
    } */
    {
      title: "Recursos",
      path: "information/map-resources"
    },
    {
      title: "Admin Resources",
      path: "/information/admin"
    }
  ];

var logo=["./logo.png"]



export default function App() {
  return (
    <div className="App">
    <Router>
      <Navbar navLinks={navLinks} logo={logo}/>
      <Routes>
        <Route path="/home" element={ <Home/>} />
        <Route path="information/sections/:id" element={ <ListAdvertisement/>} />
        <Route path="information/sections" element={ <ListAdvertisement/>} />
        <Route path="information/advertisements/:id" element={ <ShowAdvertisement/>} />
        <Route path="information/advertisements/create" element={ <CreateAdvertisement/>} />
        <Route exact path='/information/map-resources' element={<ResourcesListEdit/>} />
        <Route path="/information/map-resources/:id" element={ <ShowResourceUser/>} />

        <Route exact path='/information/edit-resource/:id' element={<UpdateResource/>} />
        <Route exact path='/information/create-resource' element={<CreateResource/>} />
        <Route exact path='/information/admin' element={<ResourcesTable/>} />
        <Route path="/information/resources/:id" element={ <ShowResource/>} />
        <Route path="/partners" element={ <ListPartner/>} />
        <Route path="/partners/:id" element={ <ShowPartner/>} />
        <Route path="/partners/create" element={ <CreatePartner/>} />
        <Route path="/partners/update/:id" element={ <UpdatePartner/>} />
        <Route path="/partners/:id/communication/create" element={ <CreateCommunication/>} />
        <Route path="/partners/:id/communication/update/:idc" element={ <UpdateCommunication/>} />
        <Route path="/partners/:id/donation/create" element={ <CreateDonation/>} />
      </Routes>
    </Router>
    <Footer/>
  </div>
  );
}

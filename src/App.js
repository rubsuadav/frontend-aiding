import './App.css';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importamos los componentes creados
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ListAdvertisement from './pages/information/advertisement/ListAdvertisement';
import AdminListAdvertisement from './pages/information/advertisement/AdminListAdvertisement';
import ShowAdvertisement from './pages/information/advertisement/ShowAdvertisement';
import AdminCreateAdvertisement from './pages/information/advertisement/AdminCreateAdvertisement';
import AdminUpdateAdvertisement from './pages/information/advertisement/AdminUpdateAdvertisement';

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
      title: "Admin Recursos",
      path: "/information/admin"
    },
    {
      title: "Admin Noticias",
      path: "admin/information/advertisements"
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
        <Route path="admin/information/advertisements/create" element={ <AdminCreateAdvertisement/>} />
        <Route path="admin/information/advertisements/:id/update" element={ <AdminUpdateAdvertisement/>} />
        <Route path="admin/information/advertisements" element={ <AdminListAdvertisement/>} />
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

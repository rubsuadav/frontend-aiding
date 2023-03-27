import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Authentication and routes
import { AuthContextProvider } from "./components/routes/authContext";
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";

// importamos los componentes creados
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ListAdvertisement from "./pages/information/advertisement/ListAdvertisement";
import AdminListAdvertisement from "./pages/information/advertisement/AdminListAdvertisement";
import ShowAdvertisement from "./pages/information/advertisement/ShowAdvertisement";
import AdminCreateAdvertisement from "./pages/information/advertisement/AdminCreateAdvertisement";
import AdminUpdateAdvertisement from "./pages/information/advertisement/AdminUpdateAdvertisement";

import Home from "./pages/Home";
import ListPartner from "./pages/partners/ListPartner";
import ShowPartner from "./pages/partners/ShowPartner";
import CreatePartner from "./pages/partners/CreatePartner";
import UpdatePartner from "./pages/partners/UpdatePartner";
import CreateCommunication from "./pages/partners/CreateCommunication";
import UpdateCommunication from './pages/partners/UpdateCommunication';
import CreateDonation from './pages/partners/CreateDonation';

import Users from "./pages/base/Users";
import ViewUser from "./pages/base/ViewUser";
import EditUser from "./pages/base/EditUser";
import CreateUser from "./pages/base/CreateUser";
import Login from "./pages/base/Login";

import ListVolunteers from "./pages/volunteers/ListVolunteers";
import CreateVolunteer from "./pages/volunteers/CreateVolunteer";
import ShowVolunteer from "./pages/volunteers/ShowVolunteer";
import UpdateVolunteer from "./pages/volunteers/UpdateVolunteer";

import UpdateResource from "./pages/information/map/UpdateResource.js";
import CreateResource from "./pages/information/map/CreateResource.js";
import ShowResource from "./pages/information/map/ShowResource.js";
import ResourcesTable from "./pages/information/map/ResourcesTable.js";
import ResourcesListEdit from "./components/ResourcesListEdit";
import ShowResourceUser from "./pages/information/map/ShowResourceUser.js";

import ListContact from "./pages/base/ListContact";
import ContactDetail from "./pages/base/ShowContact";
import CreateContact from "./pages/base/CreateContact";

var navLinksPublic = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Noticias",
    path: "information/sections",
  },
  {
    title: "Recursos",
    path: "information/map-resources",
  },
];

var navLinksAdmin = [
  {
    title: "Socios",
    path: "admin/partners",
  },
  {
    title: "Usuario",
    path: "admin/users",
  },
  {
    title: "Recursos",
    path: "admin/information/resources",
  },
  {
    title: "Voluntarios",
    path: "admin/volunteers",
  },
  {
    title: "Noticias",
    path: "admin/information/advertisements",
  },
  {
    title: "Atención al cliente",
    path: "admin/base/contacts",
  },
];

var logo = ["./logo.png"];

export default function App() {
  return (
    <div className="App">

      <AuthContextProvider>
        <Router>
          <Navbar
            navLinksPublic={navLinksPublic}
            navLinksAdmin={navLinksAdmin}
            logo={logo}
          />
          <Routes>
            {/* Public routes ===========================================*/}
            <Route path="/" element={<PublicRoute />}>
              {/* Home */}
              <Route index element={<Home />} />
              {/* Contacto */}
              <Route
                path="base/contacts/CreateContact"
                element={<CreateContact />}
              />

              {/* Information */}
              <Route
                path="information/sections"
                element={<ListAdvertisement />}
              />
              <Route
                path="information/sections/:id"
                element={<ListAdvertisement />}
              />
              <Route
                path="information/advertisements/:id"
                element={<ShowAdvertisement />}
              />
              <Route
                exact
                path="information/map-resources"
                element={<ResourcesListEdit />}
              />
              <Route
                path="information/map-resources/:id"
                element={<ShowResourceUser />}
              />

              {/* Login */}
              <Route path="base/login" element={<Login />} />
            </Route>

            {/* Admin routes ============================================*/}
            <Route path="/admin" element={<PrivateRoute />}>
              {/* Base */}
              <Route path="base/contacts" element={<ListContact />} />
              <Route path="base/contacts/:id" element={<ContactDetail />} />
              <Route exact path="base/users" element={<Users />} />
              <Route exact path="base/users/crearUsuario" element={<CreateUser />} />
              <Route exact path="base/users/verUsuario/:id" element={<ViewUser />} />
              <Route exact path="base/users/editarUsuario/:id" element={<EditUser />} />

              {/* Information */}
              <Route
                path="information/advertisements/create"
                element={<AdminCreateAdvertisement />}
              />
              <Route
                path="information/advertisements/:id/update"
                element={<AdminUpdateAdvertisement />}
              />
              <Route
                path="information/advertisements"
                element={<AdminListAdvertisement />}
              />
              <Route
                exact
                path="information/edit-resource/:id"
                element={<UpdateResource />}
              />
              <Route
                path="information/resources/:id"
                element={<ShowResource />}
              />
              <Route
                exact
                path="information/create-resource"
                element={<CreateResource />}
              />
              <Route
                exact
                path="information/resources"
                element={<ResourcesTable />}
              />

              {/* Partner*/}
              <Route path="partners" element={<ListPartner />} />
              <Route path="partners/:id" element={<ShowPartner />} />
              <Route path="partners/create" element={<CreatePartner />} />
              <Route path="partners/update/:id" element={<UpdatePartner />} />

              <Route
                path="partners/:id/communication/create"
                element={<CreateCommunication />}
              />
              <Route
                path="partners/:id/communication/update/:idc"
                element={<UpdateCommunication />}
              />
              <Route
                path="partners/:id/donation/create"
                element={<CreateDonation />}
              />
              {/* Volunteers */}
              <Route path="volunteers" element={<ListVolunteers />} />
              <Route path="volunteers/create" element={<CreateVolunteer />} />
              <Route path="volunteers/:id" element={<ShowVolunteer />} />
              <Route
                path="volunteers/update/:id"
                element={<UpdateVolunteer />}
              />
            </Route>
          </Routes>
        </Router>
      </AuthContextProvider>
      <Footer />
    </div>
  );
}

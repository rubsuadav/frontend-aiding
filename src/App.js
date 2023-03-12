import './App.css';
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
      title: "Crear Socio",
      path: "partners/create"
    },
    {
      title: "Noticias",
      path: "information/sections"
    },
    {
      title: "Crear Noticia",
      path: "information/advertisements/create"
    }
  ];

var logo=["./boscoglobal-logo.png"]

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar navLinks={navLinks} logo={logo}/>
      <Routes>
        <Route path="/home" element={ <Home/>} />
        <Route path="/partners" element={ <Items/>} />
        <Route path="/partners/create" element={ <CreateUpdatePartner/>} />
        <Route path="information/sections/:id" element={ <ListAdvertisement/>} />
        <Route path="information/sections" element={ <ListAdvertisement/>} />
        <Route path="information/advertisements/:id" element={ <ShowAdvertisement/>} />
        <Route path="information/advertisements/create" element={ <CreateAdvertisement/>} />
      </Routes>
    </Router>
    <Footer/>
  </div>
  );
}

export default App;

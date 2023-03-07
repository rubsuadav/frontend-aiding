import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// importamos los componentes creados
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/partners/Home";
import Items from "./pages/partners/Items";
import Advertisement from './pages/information/advertisement/Advertisement';
import CreateUpdatePartner from "./pages/partners/createUpdatePartner";
import NewInfo from './pages/information/advertisement/NewInfo';


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
        <Route path="information/sections" element={ <Advertisement/>} />
        <Route path="information/advertisements/:id" element={ <NewInfo/>} />
      </Routes>
    </Router>
    <Footer/>
  </div>
  );
}

export default App;

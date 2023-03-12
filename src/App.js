import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// importamos los componentes creados
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ListPartner from "./pages/partners/ListPartner";
import ShowPartner from "./pages/partners/ShowPartner";
import CreatePartner from "./pages/partners/CreatePartner";
import UpdatePartner from "./pages/partners/UpdatePartner";
import CreateCommunication from "./pages/partners/CreateCommunication";
import UpdateCommunication from './pages/partners/UpdateCommunication';

var navLinks= [
    {
      title: "Inicio",
      path: "home"
    },
    {
      title: "Socios",
      path: "partners"
    },
  ];

var logo=["./logo.png"]

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar navLinks={navLinks} logo={logo}/>
      <Routes>
        <Route path="/home" element={ <Home/>} />
        <Route path="/partners" element={ <ListPartner/>} />
        <Route path="/partners/:id" element={ <ShowPartner/>} />
        <Route path="/partners/create" element={ <CreatePartner/>} />
        <Route path="/partners/update/:id" element={ <UpdatePartner/>} />
        <Route path="/partners/:id/communication/create" element={ <CreateCommunication/>} />
        <Route path="/partners/:id/communication/update/:idc" element={ <UpdateCommunication/>} />
      </Routes>
    </Router>
    <Footer/>
  </div>
  );
}

export default App;

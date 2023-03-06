import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// importamos los componentes creados
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/partners/Home";
import Items from "./pages/partners/Items";
import Details from "./pages/partners/Details";
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
        <Route path="/partners/:id" element={ <Details/>} />
        <Route path="/partners/create" element={ <CreateUpdatePartner/>} />
      </Routes>
    </Router>
    <Footer/>
  </div>
  );
}

export default App;

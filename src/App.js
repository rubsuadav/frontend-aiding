import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// importamos los componentes creados
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/partners/Home";
import Items from "./components/pages/partners/Items";

var navLinks= [
    {
      title: "Inicio",
      path: "home"
    },
    {
      title: "Socios",
      path: "partners"
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
      </Routes>
    </Router>
    <Footer/>
  </div>
  );
}

export default App;

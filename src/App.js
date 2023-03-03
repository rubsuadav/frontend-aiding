import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// importamos los componentes creados
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Items from "./components/pages/partners/Items";

var navLinks= ["Home","Items"]
var logo=["./boscoglobal-logo.png"]

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar navLinks={navLinks} logo={logo}/>
      <Routes>
        <Route path="/Home" element={ <Home/>} />
        <Route path="/Items" element={ <Items/>} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;

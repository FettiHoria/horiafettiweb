import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Home from "./Components/Home";
import Games from "./Components/Games";
import IotProjects from "./Components/IotProjects";
import Evolution from "./Components/Evolution";
import Contact from "./Components/Contact";
import logo_solaire from "./Images/logo_solaire.png"
import './App.css';
import SmartAgriculture from "./Components/IotProjectsComponents/SmartAgriculture";
import React, { useState } from 'react';


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`App ${menuOpen ? 'menu-open' : ''}`}>
    <BrowserRouter>
      <nav className="vertical-nav">
        <img src={logo_solaire} width="150" height="150" alt="Logo"></img>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AboutMe">About Me</Link></li>
          <li><Link to="/Games">Games</Link></li>
          <li><Link to="/IotProjects">Iot Projects</Link></li>
          <li><Link to="/Evolution">Evolution</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>

      <button className="menu-button" onClick={toggleMenu}>Toggle Menu</button>

      <Routes>
<Route path="/" element={<Home />}/>
<Route path="/AboutMe" element={<AboutMe />}/>
<Route path="/Games" element={<Games />}/>
<Route path="/IotProjects" element={<IotProjects />}/>
<Route path="/Evolution" element={<Evolution />}/>
<Route path="/Contact" element={<Contact />}/>
<Route path="/IotProjects/SmartAgriculture" element={<SmartAgriculture />}/>

        

    </Routes>
    </BrowserRouter>

 

    </div>
  );
}

export default App;

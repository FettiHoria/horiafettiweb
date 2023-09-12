import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Home from "./Components/Home";
import Games from "./Components/Games";
import IotProjects from "./Components/IotProjects";
import Contact from "./Components/Contact";
import ArduinoRobot1 from "./Components/IotProjectsComponents/ArduinoRobot1";
import ArduinoRobot2 from "./Components/IotProjectsComponents/ArduinoRobot2";
import './App.css';
import SmartAgriculture from "./Components/IotProjectsComponents/SmartAgriculture";
import React, { useState } from 'react';
import DarkSouls3 from "./Components/GamesComponents/DarkSouls3";
import DarkSoulsRemastered from "./Components/GamesComponents/DarkSoulsRemastered";
import LoopHero from "./Components/GamesComponents/LoopHero";
import Phasmophobia from "./Components/GamesComponents/Phasmophobia";
import PunchClub from "./Components/GamesComponents/PunchClub";
import Button from '@mui/material/Button';



function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`App ${menuOpen ? 'menu-open' : ''}`}>
    <BrowserRouter>
    
      <nav className="vertical-nav">
        {/* <img src={logo_solaire} width="150" height="150" alt="Logo"></img> */}

        
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AboutMe">About Me</Link></li>
          <li><Link to="/Games">Game reviews</Link></li>
          <li><Link to="/IotProjects">Iot Projects</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
      <nav><button className="menu-button" onClick={toggleMenu}></button></nav>

      

      <Routes>
<Route path="/" element={<Home />}/>
<Route path="/AboutMe" element={<AboutMe />}/>
<Route path="/Games" element={<Games />}/>
<Route path="/IotProjects" element={<IotProjects />}/>
<Route path="/Contact" element={<Contact />}/>
<Route path="/IotProjects/SmartAgriculture" element={<SmartAgriculture />}/>
<Route path="/IotProjects/ArduinoRobot1" element={<ArduinoRobot1 />}/>
<Route path="/IotProjects/ArduinoRobot2" element={<ArduinoRobot2 />}/>
<Route path="/Games/DarkSouls3" element={<DarkSouls3 />}/>
<Route path="/Games/DarkSoulsRemastered" element={<DarkSoulsRemastered />}/>
<Route path="/Games/LoopHero" element={<LoopHero />}/>
<Route path="/Games/Phasmophobia" element={<Phasmophobia />}/>
<Route path="/Games/PunchClub" element={<PunchClub />}/>

        

    </Routes>
    </BrowserRouter>

    {/* <div class="footer">
  <p>Footer</p>
</div> */}
    </div>
  );
}

export default App;

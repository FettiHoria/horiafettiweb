import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Home from "./Components/Home";
import Games from "./Components/Games";
import IotProjects from "./Components/IotProjects";
import Evolution from "./Components/Evolution";
import Contact from "./Components/Contact";
import './App.css';

function App() {
  return (
    <div className="App">


<BrowserRouter>
<nav class="vertical-nav">

<img src="logo_solaire.png" width="250" height="250"></img>

<ul>

<li><a href="/">Home</a></li>

<li><a href="/AboutMe">About Me</a></li>

<li><a href="/Games">Games</a></li>

<li><a href="/IotProjects">Iot Projects</a></li>

<li><a href="/Evolution">Evolution</a></li>

<li><a href="/Contact">Contact</a></li>

</ul>

</nav>

<Routes>
<Route path="/" element={<Home />}/>
<Route path="/AboutMe" element={<AboutMe />}/>
<Route path="/Games" element={<Games />}/>
<Route path="/IotProjects" element={<IotProjects />}/>
<Route path="/Evolution" element={<Evolution />}/>
<Route path="/Contact" element={<Contact />}/>

        

    </Routes>
    </BrowserRouter>

 

    </div>
  );
}

export default App;

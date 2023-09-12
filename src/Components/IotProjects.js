import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react';

    const projects = [
        {
          title: 'Smart Agriculture - Soil and air monitoring system developed on nodeMCU V3, using a local database and a local HTTP server with XAMPP, excelent project for understanding the arhitecture of this types of systems',
          imagePath: process.env.PUBLIC_URL + '/photo1.jpeg',
          link: '/IotProjects/SmartAgriculture',
        },
        {
          title: 'First Arduino robot - Chassis purchased, control was via an IR remote',
          imagePath: process.env.PUBLIC_URL + '/photo2.jpg',
          link: '/IotProjects/ArduinoRobot1',
        },
        {
          title: 'Second Arduino robot - Chassis made from a development board with small components with autonomous control',
          imagePath: process.env.PUBLIC_URL + '/photo3.jpg',
          link: '/IotProjects/ArduinoRobot2',
        },
        // Adaugă aici alte proiecte IoT în același format
      ];


    const IotProjects = () => {
        return (
          <div className="content">
            <div className="contentText">
            <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp;
            Here are some of my IoT projects, unfortunately, I don't have many photos. 
            The smart agriculture project is the most recent one and will receive significant improvements very soon. 
            The rest of the projects are from the lockdown period when components were reused in different projects. 
            <br></br><br></br>
            &nbsp; &nbsp; &nbsp; &nbsp;
            However, I will also address this aspect; the robots will be rebuilt with more advanced technologies and will have more functions. 
            Everything will evolve over time; we are just at the beginning.
            Currently, they are just previews, but in the future, I hope to provide step-by-step builds.
            <br></br><br></br>
</div>
            <center>
            <nav className="Article">
              <ul>
                {projects.map((project, index) => (
                  <li key={index}>
                    <Link to={project.link}>
                      <img src={project.imagePath} alt={project.title} />
                      <p>{project.title}</p>
                    </Link>
                    
                  </li>
                ))}
              </ul>
            </nav>
            </center>
          </div>
        );
      };

export default IotProjects;
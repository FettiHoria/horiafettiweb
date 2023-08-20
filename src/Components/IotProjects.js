import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import SmartAgriculture from './IotProjectsComponents/SmartAgriculture';


    const projects = [
        {
          title: 'Smart Agriculture - Soil and air monitoring system developed on nodeMCU V3, using a local database and a local HTTP server with XAMPP, excelent project for understanding the arhitecture of this types of systems',
          imagePath: process.env.PUBLIC_URL + '/photo1.jpeg',
          link: '/IotProjects/SmartAgriculture',
        },
        // Adaugă aici alte proiecte IoT în același format
      ];


    const IotProjects = () => {
        return (
          <div className="content">
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
          </div>
        );
      };

export default IotProjects;
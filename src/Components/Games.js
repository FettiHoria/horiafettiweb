import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react';


    const projects = [
        {
          title: 'Dark Souls 3',
          imagePath: process.env.PUBLIC_URL + '/DarkSouls3Logo.jpg',
          link: '/Games/DarkSouls3',
        },
        {
            title: 'Dark Souls Remastrered',
            imagePath: process.env.PUBLIC_URL + '/DarkSoulsRemasteredLogo.jpg',
            link: '/Games/DarkSoulsRemastered',
          },
          {
            title: 'Punch Club',
            imagePath: process.env.PUBLIC_URL + '/PunchClubLogo.png',
            link: '/Games/PunchClub',
          },
          {
            title: 'Phasmophobia',
            imagePath: process.env.PUBLIC_URL + '/PhasmophobiaLogo.jpg',
            link: '/Games/Phasmophobia',
          },
          {
            title: 'Loop Hero',
            imagePath: process.env.PUBLIC_URL + '/LoopHeroLogo.jpg',
            link: '/Games/LoopHero',
          },
        // Adaugă aici alte proiecte IoT în același format
      ];


    const Games = () => {
        return (
          <div className="content">

<div className="contentText">
            <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp;
            I consider video games a form of art that resonates with me; I greatly enjoy the various universes in which many of the actions of the games I appreciate are set. 
            The first thing that catches my attention in a video game is its graphic style, its consistency, and the color palette used. 
            Equally important is the gameplay mechanics and the variety of approaches I can take in playing the game. 
            My inclination towards Souls-like games can also be observed for these reasons.
            <br></br><br></br>
            &nbsp; &nbsp; &nbsp; &nbsp;
            Of course, I will provide more details in the reviews of each game, reviews that I will only create for the games in which I've spent many hours and extensively explored. 
            I will also take into account the opinions of friends with whom I've had discussions on this subject.
            <br></br><br></br>
</div>

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

export default Games;
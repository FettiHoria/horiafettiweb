import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



const Home = () => {


    return (
        <div className='content'>  


<div className="contentText">
            <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp;
            Hello, and welcome to my personal website where you'll find more information about me and my hobbies. 
            In the upcoming period, I aim to transition from simple project presentations to detailed showcases, allowing anyone to replicate the projects. 
            On the game reviews side, I'll also include recommendations regarding the prices at which certain games are worth purchasing, among other things.
            However, my primary focus remains on the smart agriculture application.
    
            <br></br><br></br>
</div>


<div class="grid-container">
  <div class="grid-item">
  <img src={ process.env.PUBLIC_URL + '/home1.png'}  style={{ maxWidth: '100%', height: 'auto' }}/>
  <p>Smart Agriculture Application</p>
  <p style={{fontSize: "16px"}}>Maximum priority</p>
  </div>


  <div class="grid-item">
  <img src={ process.env.PUBLIC_URL + '/home2.jpg'}  style={{ maxWidth: '100%', height: 'auto' }}/>
  <p>PC building</p>
  <p style={{fontSize: "16px"}}>We need money for this</p>
  </div>


  <div class="grid-item">
  <img src={ process.env.PUBLIC_URL + '/home3.png'}  style={{ maxWidth: '100%', height: 'auto' }}/>
  <p>IoT projects remake</p>
  <p style={{fontSize: "16px"}}>Takes a lot of time, but it will be fun to do</p>
    </div>  


  <div class="grid-item">
  <img src={ process.env.PUBLIC_URL + '/home4.png'}  style={{ maxWidth: '100%', height: 'auto' }}/>
  <p>Gaming content</p>
  <p style={{fontSize: "16px"}}>Targeted for winter because I need a lot of time for this one</p>

  </div>

</div>

                    </div>

        
    )

}

export default Home;
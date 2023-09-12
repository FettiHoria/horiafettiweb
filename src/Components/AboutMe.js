import React from 'react';


const AboutMe = () => {


    return (
        <div className='content'>  
        <br></br><br></br>
           <center><h1>Education</h1></center> 
            <br></br>

            <div class="grid-container">
  <div class="grid-item">
  <img src={process.env.PUBLIC_URL + '/poza_facultate.jpg'} style={{ maxWidth: '70%', height: 'auto' }}/>
  <p style={{fontSize: "16px"}}>Maximum priority</p>
  </div>

  <div class="grid-item">
  <img src={process.env.PUBLIC_URL + '/utcn1.png'} style={{ maxWidth: '80%', height: 'auto' }}/>
  <p style={{fontSize: "16px"}}>Automation and Applied Informatics</p>
  </div>

</div>

<br></br>
&nbsp; &nbsp; &nbsp; &nbsp;
My years in university pursuing a degree in Automation Engineering were marked by a journey of considerable difficulty and challenge. 
The curriculum was intricate, delving into intricate aspects of automation systems and their applications. 
The demanding workload and complex problem-solving required a high level of commitment and dedication. 
Balancing lectures, labs, and assignments was a true test of time management skills.
<br></br>
&nbsp; &nbsp; &nbsp; &nbsp;
 Moreover, collaborating on group projects, each with its own set of complexities, highlighted the importance of teamwork and effective communication. 
 The journey was indeed a formidable one, filled with moments of frustration and triumph, shaping not only my technical prowess but also my resilience in the face of academic trials.

        </div>

        
    )

}

export default AboutMe;
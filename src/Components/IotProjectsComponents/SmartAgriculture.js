import React from 'react';
import SA1 from "./SmartAgriculturePhoto1.jpeg";
import SA2 from "./nodeMcuSchema.png";
//import VideoJS from './VideoJS'


const SmartAgriculture = () => {

    const playerRef = React.useRef(null);

    const videoJsOptions = {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [{
        src: '/pr_video.mp4',
        type: 'video/mp4'
      }]
    };
  
    const handlePlayerReady = (player) => {
      playerRef.current = player;
  
      // You can handle player events here, for example:
      player.on('waiting', () => {
        console.log('player is waiting');
      });
  
      player.on('dispose', () => {
        console.log('player will dispose');
      });
    };
  


    return (
        <div className='content'>  
        <center>
            <h1>Plant monitoring project</h1>
            </center>
            <br></br><br></br>
            <div className='contentText'>
       &nbsp; &nbsp; &nbsp; &nbsp; 
General Considerations Monitoring parameters such as temperature, humidity, and soil moisture is essential to ensure optimal growth and health of plants, as these parameters play a crucial role in determining plant growth and can significantly impact their development, productivity, and survival. Temperature is the factor that affects various physiological processes of plants, such as photosynthesis, respiration, and transpiration. Different plant species have different temperature ranges in which they thrive. Maintaining an optimal temperature range leads to better plant growth while also avoiding the risk of diseases. This objective can be achieved by monitoring temperature and identifying situations when plants are exposed to cold or heat.
<br></br>
<br></br>
&nbsp; &nbsp; &nbsp; &nbsp; 

Plants' humidity requirements vary depending on their natural habitat, and by monitoring this parameter, we ensure that air humidity is suitable and will not negatively affect their development. Low air humidity can lead to wilting and slowed growth, while high air humidity can promote the onset of fungal diseases and hindered air circulation. However, the critical factor in plant growth is soil moisture due to its direct impact on root development, nutrient absorption, and overall plant hydration. Excessive soil irrigation leads to root rot, while insufficient irrigation leads to dehydration. In both situations, crops are compromised, which can be avoided by monitoring the soil moisture level, thus maintaining soil moisture within safe limits for plants.
<br></br><br></br>
</div>


            <img src={SA1} style={{ maxWidth: '100%', height: 'auto' }}></img>
            <br></br><br></br>
            <div className='contentText'>
            &nbsp; &nbsp; &nbsp; &nbsp;           
The monitoring system is the physical component that is placed on the ground. The attached sensors acquire data from the soil about soil moisture, while those on the surface collect data about temperature and humidity percentage in the air, establish an internet connection, and send the data to the server.
           <br></br><br></br>
           &nbsp; &nbsp; &nbsp; &nbsp; 
           As can be seen in the above diagram, the monitoring system consists of the following components:
<ul className='contentText'>
<li>NodeMCU V3</li>
<li>3 humidity and temperature sensors</li>
<li>2 soil moisture sensors</li>
<li>16-channel Analog Multiplexer</li>
</ul>
<br></br><br></br>
<center>
<img src={SA2} style={{ maxWidth: '100%', height: 'auto' }}></img></center>
            <br></br><br></br>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; 
        The web application and the database are local for now. I work hard to deploy them on this domain, but first i want to implement some improvments. Just for demonstration I will let you a backup video will all the functionalities.
        <br></br><br></br> */}

            </div>
{/* <center>

<VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
  
</center> */}
        </div>

        
    )

}

export default SmartAgriculture;
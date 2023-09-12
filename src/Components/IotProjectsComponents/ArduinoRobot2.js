import React from 'react';

const ArduinoRobot2 = () => {

   


    return (
        <div className='content'>
        <br></br>
        <center>
            <h1>Arduino Nano based robot</h1>
            </center>
            <br></br><br></br>
            <img src={process.env.PUBLIC_URL + '/robot_arduino_2_2.jpg'} style={{ maxWidth: '100%', height: 'auto' }}/>
            <br></br><br></br>
            <div className='contentText'>
            &nbsp; &nbsp; &nbsp; &nbsp;
            This is a robot made on the most generic chassis you can buy, it was a beginner project. For development board I used Arduino UNO, for DC motor controls I used LN293d. The IR receiver is placed on the front for the signal to be easly accesible.
            Arduino receive the code of the buttons pressed from the remote in HEX and Arduino has a case switch with actions for every button.
</div>
     </div>


    )

}

export default ArduinoRobot2;
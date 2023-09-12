import React from 'react';
import Footer from '../Footer';

const DarkSouls3 = () => {

   


    return (
        <div className='content'>
        <br></br>
            <center><h1>Dark Souls 3</h1></center>
            <br></br>
<center>
<img src={ process.env.PUBLIC_URL + '/stars/full_star.png'}/>
<img src={ process.env.PUBLIC_URL + '/stars/full_star.png'}/>
<img src={ process.env.PUBLIC_URL + '/stars/full_star.png'}/>
<img src={ process.env.PUBLIC_URL + '/stars/full_star.png'}/>
<img src={ process.env.PUBLIC_URL + '/stars/full_star.png'}/>
</center>
<br></br><br></br>
{/* <div className='contentText'> */}
            &nbsp; &nbsp; &nbsp; &nbsp;
            Dark Souls 3, a fantastic console-to-PC port, is much more visually impressive than its predecessors. It's more colorful and vibrant. 
            The series' progress is remarkable, and in this final game of the trilogy, attention to detail is evident. 
            The game offers a much broader range of weapons, and even though its progression is linear and lacks the freedom of the first game, it's much more enjoyable. 
            Spell-based builds are finally a pleasure to use, with the ability to balance between Estus Flask and Ashen Estus based on our mana needs. 
            The faster gameplay style also benefits thrusting sword builds, which become quite effective with the help of certain infusions.
            <br></br><br></br>

<center><img src={ process.env.PUBLIC_URL + '/DarkSouls31.jpg'}   style={{ maxWidth: '100%', height: 'auto' }}/></center>

<br></br><br></br>
&nbsp; &nbsp; &nbsp; &nbsp;
Speaking of the impact of weapons, we must mention the unfortunate decision to nerf all strength-scaling weapons due to their overpowered nature in PVP. 
This nerf has made strength builds less enjoyable to play in single-player, while in PVP, pyro/mage/miracle builds dominate and make quick work of opponents.
            <br></br><br></br>
            
<center><img src={ process.env.PUBLIC_URL + '/DarkSouls32.jpg'}  style={{ maxWidth: '100%', height: 'auto' }}/></center>
<br></br><br></br>
&nbsp; &nbsp; &nbsp; &nbsp;
Boss battles can be described in one expression: "the best." I won't say more to avoid spoilers. 
Bosses have unique movements, patterns, tempo, and intense music. Additionally, due to the faster movement of both your character and the bosses, the battles feel more 
immersive and intense, despite being more challenging.

Another aspect that reduces frustration is the shorter runs to boss arenas. You no longer have to die multiple times on your way to the boss, only to get one-shot on 
the 11th attempt. Thanks to FromSoftware for this improvement, as it saves our controllers, mice, keyboards, and monitors from being thrown in frustration.<br></br><br></br>

{/* </div> */}
</div>

    )

}

export default DarkSouls3;
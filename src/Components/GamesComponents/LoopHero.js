import React from 'react';

const LoopHero = () => {

   


    return (
        <div className='content'>
        <br></br>
        <center>
            <h1>Loop Hero</h1>
            <br></br>

<img src={ process.env.PUBLIC_URL + '/stars/full_star.png'}/>
<img src={ process.env.PUBLIC_URL + '/stars/full_star.png'}/>
<img src={ process.env.PUBLIC_URL + '/stars/full_star.png'}/>
<img src={ process.env.PUBLIC_URL + '/stars/full_star.png'}/>
<img src={ process.env.PUBLIC_URL + '/stars/full_star.png'}/>
</center>

<br></br><br></br>
<div className='contentText'>
            &nbsp; &nbsp; &nbsp; &nbsp;
            Loop Hero is the game I instantly fell in love with, which might be evident from my review of Punch Club, where I expressed a strong affinity for pixel art. In the case of Loop Hero, I was particularly drawn to the combination of colors: the brick-red, green, and gray hues create a steampunk-like atmosphere that sets the game's tone perfectly.

The overall story is filled with mystery and offers something quite unique and well-developed. I may repeat myself, but the game truly stands out. It eschews generic mechanics and maintains the originality we've come to expect from the Devolver studio.
            <br></br><br></br>

<center><img src={ process.env.PUBLIC_URL + '/LoopHero1.jpg'} style={{ maxWidth: '100%', height: 'auto' }}/></center>
<br></br><br></br>
&nbsp; &nbsp; &nbsp; &nbsp;
In the game, we have a camp that we can develop using different buildings constructed from materials gathered during expeditions. These buildings grant us specific buffs for the upcoming expeditions, forming the foundation of progression. As we construct new buildings, we unlock two additional classes alongside the default warrior class. The game features the warrior class by default, and players can unlock the rogue and necromancer classes. It's worth noting that the rogue class is a "glass cannon," being powerful but fragile.
            <br></br><br></br>
            
<center><img src={ process.env.PUBLIC_URL + '/LoopHero2.jpg'}  style={{ maxWidth: '100%', height: 'auto' }}/></center>
<br></br><br></br>
&nbsp; &nbsp; &nbsp; &nbsp;
Loop Hero comprises four chapters. Personally, I recommend using the warrior class for the first chapter and switching to the necromancer afterward. The rogue class is more of a "glass cannon."

Each time we embark on an expedition, a new path is generated where our character can loop around, battling various creatures that we strategically place on the map. This allows us to adjust the game's difficulty according to our preferences. However, opting for an easier run results in less loot and a boss that appears much later.

<br></br><br></br>

</div>
     </div>


    )

}

export default LoopHero;
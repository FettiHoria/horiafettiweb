import React from 'react';

const PunchClub = () => {

   


    return (
        <div className='content'>
        <br></br>
        <center>
            <h1>Punch Club</h1>
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
        "Punch Club is a game with a pleasant retro atmosphere created by pixelated graphics and 8-bit music. The gameplay mechanics are fairly easy to learn; for the most part, you need to choose a primary attribute among strength, agility, and stamina to focus on training. You also need to select a secondary attribute; viable attribute combinations can be found in a book on the main character's table after a phone call with Mike.

After progressing in the skill tree, we can unlock three paths based on our primary attribute. Through these paths, we can unlock and use skills more tailored to the stats we've trained.
<br></br><br></br>
<center><img src={ process.env.PUBLIC_URL + '/PunchClub1.png'}  style={{ maxWidth: '100%', height: 'auto' }}/></center>
<br></br><br></br>
&nbsp; &nbsp; &nbsp; &nbsp;
As a tycoon game, you need to work for money for food, gym access, and other things. The main goal of the protagonist is to find his father, who disappeared when he was young. The game has multiple narrative threads that the player can follow, along with many missions and side stories.
We can become a professional fighter, join the mafia, or become a masked hero of the city. The game is filled with references to other games or movies. I'm quite certain you'll notice them. Of course, these things prevent the game from taking itself too seriously, although I don't think it negatively affects it in any way.
<br></br><br></br>
<center><img src={ process.env.PUBLIC_URL + '/PunchClub2.png'}  style={{ maxWidth: '100%', height: 'auto' }}/></center>
<br></br><br></br>
&nbsp; &nbsp; &nbsp; &nbsp;
If you're drawn to indie games with unique mechanics, you might want to give Punch Club a chance.
        </div>
     </div>


    )

}

export default PunchClub;
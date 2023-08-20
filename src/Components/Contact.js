import React from 'react';


const Contact = () => {


    return (
        <div className='content'>  
            <center>
                    <img src={process.env.PUBLIC_URL + '/pozaProfil.png'} width='200px' />
                    <br></br><br></br>
<h3>Contact</h3>
                    <br></br>
                    e-mail: fetti.horia@gmail.com
                    <br></br><br></br>
                    Coinbase affliate link: <a href='https://www.coinbase.com/join/LYAQZ1?src=referral-link'>https://www.coinbase.com/join/LYAQZ1?src=referral-link </a>

             </center>       
        </div>

        
    )

}

export default Contact;
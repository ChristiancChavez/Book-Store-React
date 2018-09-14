import React, { Component } from 'react';
import Facebook from '../Images/facebook.png';
import Whatsapp from '../Images/whatsapp.png';
import Twitter from '../Images/twitter.png';
import George from '../Images/author.jpg';

class Footer extends Component{
    render() {
        return(
            <div>
                <img src={Facebook} alt=""/>
                <img src={Whatsapp} alt=""/>
                <img src={Twitter} alt=""/>
                <img src={George} alt=""/>
            </div>
        )
    }
}

export default Footer;
import React, { Component } from 'react';
import Facebook from '../Images/facebook.png';
import Whatsapp from '../Images/whatsapp.png';
import Twitter from '../Images/twitter.png';

class Footer extends Component{
    render() {
        return(
            <div className="footer"> 
                <span className="footer__question">If you want kown more information, look own social networks.</span>
                <img className="footer__social" src={Facebook} alt=""/>
                <img className="footer__social" src={Whatsapp} alt=""/>
                <img className="footer__social" src={Twitter} alt=""/>
            </div>
        )
    }
}

export default Footer;
import React, { Component } from 'react';
import Cover from '../Images/games-of-thrones.jpg';

class Header extends Component{
    render(){
        return(
            <div>
                <img src={Cover} alt=""/>
            </div>
        )
    }
}

export default Header;
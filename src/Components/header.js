import React, { Component } from 'react';
import Cover from '../Images/games-of-thrones.jpg';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <span className="header__title">After To</span>
                <img className="header__img" src={Cover} alt=""/>
            </div>
        )
    }
}

export default Header;
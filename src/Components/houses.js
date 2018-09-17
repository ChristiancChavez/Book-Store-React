import React, { Component } from 'react';
import iconHouse  from '../Images/house.jpg';
class Houses extends Component {
    render(){
        return(
            <div className="houses">
                <span className="houses__title">HOUSES OF ICE AND FIRE SONG</span>
                <span className="houses-container">
                    <span className="house">
                        <img className="house__logo" src={iconHouse} alt=""/>
                        <span className="house-info">
                            <span className="house-info__title">House Algoord</span>
                            <span className="house-info__description">sjvnfjvnfjvknsvjnsvjsnvjsfvs
                            jnsfjnsfjnsjfnsjlnjsfn</span>
                            <span className="house-info__region">The Westerlands</span>
                        </span>
                    </span>
                    <span className="house">
                        <img className="house__logo" src={iconHouse} alt=""/>
                        <span className="house-info">
                            <span className="house-info__title">House Algoord</span>
                            <span className="house-info__description">sjvnfjvnfjvknsvjnsvjsnvjsfvs
                            jnsfjnsfjnsjfnsjlnjsfn</span>
                            <span className="house-info__region">The Westerlands</span>
                        </span>
                    </span>
                    <span className="house">
                        <img className="house__logo" src={iconHouse} alt=""/>
                        <span className="house-info">
                            <span className="house-info__title">House Algoord</span>
                            <span className="house-info__description">sjvnfjvnfjvknsvjnsvjsnvjsfvs
                            jnsfjnsfjnsjfnsjlnjsfn</span>
                            <span className="house-info__region">The Westerlands</span>
                        </span>
                    </span>
                    <span className="house">
                        <img className="house__logo" src={iconHouse} alt=""/>
                        <span className="house-info">
                            <span className="house-info__title">House Algoord</span>
                            <span className="house-info__description">sjvnfjvnfjvknsvjnsvjsnvjsfvs
                            jnsfjnsfjnsjfnsjlnjsfn</span>
                            <span className="house-info__region">The Westerlands</span>
                        </span>
                    </span>
                </span>
            </div>
        )
    }
}

export default Houses;
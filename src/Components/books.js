import React, { Component } from 'react';
import Book from '../Images/book.jpg';

class Books extends Component{
    render(){
        return(
            <div className="books">
                <span className="books__title">BOOKS OF GAME OF THRONES</span>
                <span className="book__container">
                    <img className="book__img" src={Book} alt=""/>
                    <span className="book__info">
                        <span className="book__info-title">Storm of Swords </span>
                        <span className="book__info-description">audfaubjbjbñubafuñhagiuasjvbñjkvckjcvjkzbvsjvbjbvjkvbljkvblvkjbavlkjasblskjbsfklhbflhsblkashblhk</span>
                        <span className="book__info-pages">490 pages</span>
                        <span className="book__info-date">1980</span>
                    </span>
                </span> 
            </div>
        )
    }
}

export default Books;
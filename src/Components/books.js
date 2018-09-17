import React, { Component } from 'react';
import Book from '../Images/book.jpg';

class Books extends Component{
    render(){
        return(
            <div className="books">
                <span className="books__title">BOOKS AFTER TO GAME OF THRONES</span>
                <span className="books__container">
                    <span className="book">
                        <img className="book__img" src={Book} alt=""/>
                        <span className="book__info">
                            <span className="book__info-title">Storm of Swords </span>
                            <span className="book__info-description">audfaubjbjbñubafuñhagiuasjvbñjkvckjcvjkzbvs
                            jvbjbvjkvbljkvblvkjbavlkjasblskjbsfklhbflhsblkashblhk</span>
                            <span className="book__info-pages">490 pages</span>
                            <span className="book__info-date">1980</span>
                        </span>
                    </span>
                    <span className="book">
                        <img className="book__img" src={Book} alt=""/>
                        <span className="book__info">
                            <span className="book__info-title">Storm of Swords </span>
                            <span className="book__info-description">audfaubjbjbñubafuñhagiuasjvbñjkvckjcvjkzbvs
                            jvbjbvjkvbljkvblvkjbavlkjasblskjbsfklhbflhsblkashblhk</span>
                            <span className="book__info-pages">490 pages</span>
                            <span className="book__info-date">1980</span>
                        </span>
                    </span>
                </span> 
            </div>
        )
    }
}

export default Books;
import React, { Component } from 'react';

class ModalAutor extends Component {
    render(){
        return (
            <div className="author">
                <span className="books">
                    <h1 className="books__title">Other Books</h1>
                    <ul className="books__list">
                        <li className="books__list-book">The Armageddon Rag</li>
                        <li className="books__list-book">Nightflyers</li>
                        <li className="books__list-book">Dying of the Light</li>
                        <li className="books__list-book">A Song for Lya</li>
                        <li className="books__list-book">Sandkings</li>
                    </ul>
                </span>
                <span className="bio">
                    <h1 className="bio__title">About his</h1>
                    <p className="bio__text">George Raymond Richard Martin (born George Raymond Martin; September 20, 1948), also known as GRRM, 
                        is an American novelist and short-story writer in the fantasy, horror, and science fiction genres, screenwriter, 
                        and television producer. He is best known for his series of epic fantasy novels, 
                        A Song of Ice and Fire, which was later adapted into the HBO series Game of Thrones (2011–present).
                        In 2005, Lev Grossman of Time called Martin "the American Tolkien", and in 2011, he was included on the 
                        annual Time 100 list of the most influential people in the world.</p>
                </span>
                <span className="awards">
                    <h1 className="awards__title">Awards and Nominations</h1>
                    <ul className="awards__list">
                        <li className="awards__list-award">2015 Primetime Emmy Award for Outstanding Drama Series - Game of Thrones, Season 5 (co-executive producer).</li>
                        <li className="awards__list-award">2015 Northwestern University Medill Hall of Achievement Award</li>
                        <li className="awards__list-award">2016 Primetime Emmy Award for Outstanding Drama Series - Game of Thrones, Season 6 (co-executive producer)</li>
                        <li className="awards__list-award">2013 Primetime Emmy Award for Outstanding Drama Series for Game of Thrones, Season 3 (co-executive producer)</li>
                        <li className="awards__list-award">2014 Primetime Emmy Award for Outstanding Drama Series for Game of Thrones, Season 4 (co-executive producer)</li>
                    </ul>
                </span>
            </div>
        )
    }
}

export default ModalAutor;
import React, { Component } from 'react';
import './main.css';
import { requestGetBook, requestGetCharacters, requestGetHouses } from './Request/request.js';
import Header from './Components/header';
import Books from './Components/books';
import Houses from './Components/houses';
import Author from './Components/author';
import Footer from './Components/footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount(){
    requestGetBook().then(info => {
      console.log(info);
    }).catch(error => {
      console.log(error);
    })

    requestGetCharacters().then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    })

    requestGetHouses().then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    })
  }
  


  render() {
    return (
      <div className="App">
        <Header/>
        <Books/>
        <Houses/>
        <Author/>
        <Footer/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { requestGetBook } from './Request/request.js';

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
  }
  


  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;

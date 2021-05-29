import React, { Component }from 'react';
import './App.css';
import Navigation from '../components/Navigation';

class App extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  render(){
    return (
      <div className="bg-dark container-fluid">
        <div className="App">
          <h1 className="title">Welcome to simple crud</h1>
        </div>
        <Navigation/>
      </div>
    );
  }
}

export default App;

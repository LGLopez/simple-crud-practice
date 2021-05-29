import React, { Component }from 'react';
import './App.css';
import Navigation from '../components/Navigation';

class App extends Component {

  render(){
    return (
      <div className="bg-dark container-fluid">
        <Navigation/>
        <div className="App">
          <h1 className="title">Welcome to simple crud</h1>
        </div>
      </div>
    );
  }
}

export default App;

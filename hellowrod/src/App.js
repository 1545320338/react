import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let element=<h1>111</h1>
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello React 
          </p>
          <a href="https:\/\/reactjs.org"
            className="App-link" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

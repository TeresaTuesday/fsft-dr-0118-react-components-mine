import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ze Bio Page</h1>
        </header>
        <h2>
          Things about Wes
        </h2>
        <ul className="UnorderedList">
          <div id='beardly'></div>
          <div id='hatly'></div>
          <div id='buildly'></div>
          <div id='dudely'></div>
        </ul>
      </div>
    );
  }
}

export default App;

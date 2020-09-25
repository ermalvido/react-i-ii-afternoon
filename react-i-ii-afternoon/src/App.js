import React, { Component } from 'react';
import User from './Component/User';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h1>Home</h1>
        </div>
        <User />
      </div>
    );
  }
}
export default App;
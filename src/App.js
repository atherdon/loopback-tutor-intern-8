import React, { Component } from 'react';
import Main from './components/Main'
import Navbar from './components/Navbar'
import './styles/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Loopback API</h1>
          </header>
          <Navbar />
          <Main />
        
      </div>
    );
  }
}

export default App;
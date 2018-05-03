import React, { Component } from 'react';
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import './styles/App.css';
import Header from './pages/header.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header / >
        <Main />
      </div>
    );
  }
}

export default App;
/*        <header className="App-header">
          <h1 className="App-title">Loopback API</h1>
          </header>
          <Navbar />
        */
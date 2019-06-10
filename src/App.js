import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          And here is where my profile will be...
        </p>
        <a
          className="App-link"
          href="https://www.lola.bike"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lola Dot Bike 
        </a>
      </header>
    </div>
  );
}

export default App;

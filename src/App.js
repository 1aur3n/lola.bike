import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-141699006-1');
ReactGA.pageview(window.location.hash);

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
          <code>www.lola.bike</code> 
        </a>
      </header>
      <footer className="App-footer">
        
      </footer>
    </div>
  );
}

export default App;

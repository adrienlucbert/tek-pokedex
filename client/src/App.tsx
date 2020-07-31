import React from 'react';
import logo from './logo.svg';
import './App.css';
import Strapi from 'strapi-sdk-javascript';
import { Button } from '@material-ui/core';

const strapi = new Strapi('http://localhost:1337');

class App extends React.Component {
    render () {
        return (<div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
              <Button variant='contained' color='primary'> Ceci est un boutton</Button>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>)
    };
}

export default App;

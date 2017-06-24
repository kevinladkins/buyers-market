import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap'
import './App.css';

const storeHead = "Buyer's Market"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>{storeHead}</h1>
          <p>Connecting buyers with sellers</p>
        </Jumbotron>

          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      </div>
    );
  }
}

export default App;

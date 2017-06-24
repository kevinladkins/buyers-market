import React, { Component } from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {Jumbotron} from 'react-bootstrap'
import Categories from './containers/Categories'
import Home from './containers/Home'
import Listings from './containers/Listings'
import Users from './containers/Users'
import './App.css';

const storeHead = "Buyer's Market"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>{storeHead}</h1>
          <p>Connecting buyers with sellers</p>
          <Navbar />
        </Jumbotron>
        <div className="spacer"></div>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path='/categories' component={Categories}/>
            <Route path='/users' component={Users}/>
            <Route path='/listings' component={Listings}/>
          </div>
        </Router>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      </div>
    );
  }
}

export default App;

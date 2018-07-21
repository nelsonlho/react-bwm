import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './shared/Header';
import RentalListing from './components/RentalListing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='container'>
          <RentalListing /> 
        </div>
      </div>
    );
  }
}

export default App;

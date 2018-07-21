import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './shared/Header';
import RentalListing from './components/RentalListing';
import RentalDetail from './components/RentalDetail';

const store = require('./reducers').init();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className="container">
              <Route exact path="/" render={ ()=> <Redirect to="/rentals" />} />
              <Route exact path="/rentals" component={RentalListing} />
              <Route exact path="/rentals/:id" component={RentalDetail} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

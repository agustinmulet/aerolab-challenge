import React, { Component } from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import List from './Components/List';

import Provider from './Provider';

class App extends Component {
  render() {
    return (
      <Provider>
        <Navbar />
        <List />
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import UserList from './components/UserList'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <UserList />
      </div>
    );
  }
}

export default App;

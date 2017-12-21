import React, { Component } from 'react';
import './App.css';
import Inbox from './components/inbox.js'


class App extends Component {

  render() {
    return (
      <div className="container">
        <Inbox />
      </div>
    );
  }
}

export default App;

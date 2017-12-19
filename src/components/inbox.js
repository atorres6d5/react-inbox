import React, { Component } from 'react';
import Toolbar from './Toolbar.js'
import Messages from './Messages.js'
import messageData from '../seeds/messages.json'


class Inbox extends Component {

  render() {
    return (
      <div>
        <Toolbar />
        <Messages messages={messageData} />
      </div>
    );
  }

}

export default Inbox;

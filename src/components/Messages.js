import React, { Component } from 'react';
import Message from './message.js'

class Messages extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="row message unread">
        <div className="col-xs-11">
          {this.props.messages.messageData.map(letter=>{
            return <Message
              subject={letter}
              emailClass={this.props.emailClass}
              selectedClass={this.props.selectedClass}
              starredClass={this.props.starredClass}
              />
          })}
        </div>
      </div>
    );
  }

}

export default Messages;

import React, { Component } from 'react';
import Message from './message.js'

class Messages extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div>
        <div className="col-xs-11">
          {this.props.messages.messageData.map(letter=>{
            console.log(letter);
            return <Message
              subject={letter}
              emailClass={this.props.emailClass(letter)}
              selectedClass={this.props.selectedClass}
              starredClass={this.props.starredClass(letter)}
              />
          })}
        </div>
      </div>
    );
  }

}

export default Messages;

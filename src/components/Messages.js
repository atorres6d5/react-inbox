import React, { Component } from 'react';
import Message from './message.js'

class Messages extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div class="row message unread">
        <div class="col-xs-11">
          {this.props.messages.map(letter=>{
            return <Message subject={letter} />
          })}
        </div>
      </div>
    );
  }

}

export default Messages;

import React, { Component } from 'react';
import Message from './message.js'

class Messages extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div class="row message unread">
        <div class="col-xs-1">
          <div class="row">
            <div class="col-xs-2">
              <input type="checkbox" />
            </div>
            <div class="col-xs-2">
              <i class="star fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div class="col-xs-11">
          {this.props.messages.map(letter=>{
            return <Message subject={letter.subject} />
          })}
        </div>
      </div>
    );
  }

}

export default Messages;

import React, { Component } from 'react';
import Toolbar from './Toolbar.js'
import Messages from './Messages.js'
import messageData from '../seeds/messages.json'


class Inbox extends Component {
  constructor(){
    super()
    this.state = {
      messageData:messageData,
      messagesRead:0
    }
  }
  emailClass = (info) =>{
    if(info.read){
      return 'read'
    }
    else{
      return 'unread'
    }
  }
  selectedClass = ()=>{
    if(this.state.messageData.selected){
      return " selected"
    }
  }
  starredClass = (data)=>{
    if(data.starred){
      return "star fa fa-star"
    }
    else{
      return "star fa fa-star-o"
      }
  }


  devLabel=(prop)=>{
    if(prop.includes('dev')){
      return <span class="label label-warning">dev</span>
    }
  }
  personalLabel=(prop)=>{
    if(prop.includes('personal')){
      return <span class="label label-warning">personal</span>
    }
  }
  gSchoolLabel=(prop)=>{
    if(prop.includes('gschool')){
      return <span class="label label-warning">gschool</span>
    }
  }
  checkedBox=()=>{
    if(this.state.messageData.selected){
      return "checked"
    }
}


  render() {
    return (
      <div className="container">
        <Toolbar readMessages={this.state.messagesRead}/>
        <Messages
           messages={this.state}
           emailClass={this.emailClass}
           selectedClass={this.selectedClass}
           starredClass={this.starredClass} />
      </div>
    );
  }

}

export default Inbox;

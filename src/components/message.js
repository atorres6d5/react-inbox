import React from 'react';

const Message = ({subject, emailClass, selectedClass, starredClass}) => {

  let devLabel=(prop)=>{
    if(prop.includes('dev')){
      return <span class="label label-warning">dev</span>
    }
  }
  let personalLabel=(prop)=>{
    if(prop.includes('personal')){
      return <span class="label label-warning">personal</span>
    }
  }
  let gSchoolLabel=(prop)=>{
    if(prop.includes('gschool')){
      return <span class="label label-warning">gschool</span>
    }
  }
  let checkedBox=()=>{
    if(this.state.messageData.selected){
      return "checked"
    }
  }

  return(
  <div className={'row message '+emailClass}>
    <div className="col-xs-1">
      <div className="row">
        <div className="col-xs-2">
          <input type="checkbox" />
        </div>
        <div className="col-xs-2">
          <i className={starredClass}></i>
        </div>
      </div>
    </div>
    <div className="col-xs-11">
      {devLabel(subject.labels)}
      {personalLabel(subject.labels)}
      {gSchoolLabel(subject.labels)}
      <a>
        {subject.subject}
      </a>
    </div>
  </div>
)


};

export default Message;

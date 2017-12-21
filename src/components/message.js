import React from 'react';

const Message = ({subject, emailClass, selectedClass, starredClass}) => {
console.log( emailClass, selectedClass, starredClass)
  return(
  <div className={emailClass+selectedClass}>
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
      {/* {devLabel(subject.labels)}
      {personalLabel(subject.labels)}
      {gSchoolLabel(subject.labels)} */}
      <a>
        {subject.subject}
      </a>
    </div>
  </div>
)


};

export default Message;

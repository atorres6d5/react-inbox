import React from 'react';

const Message = ({subject}) => {
  let emailClass
  let starred
if(subject.read){
   emailClass ='row message read'}
else{
  emailClass = 'row message unread'
  }
if(subject.starred){
  starred="star fa fa-star"
}
else{
  starred="star fa fa-star-o"
}

function devLabel(prop){
  if(prop.includes('dev')){
    return <span class="label label-warning">dev</span>
  }
}
function personalLabel(prop){
  if(prop.includes('personal')){
    return <span class="label label-warning">personal</span>
  }
}
function gSchoolLabel(prop){
  if(prop.includes('gschool')){
    return <span class="label label-warning">gschool</span>
  }
}


  return(
  <div class={emailClass}>
    <div class="col-xs-1">
      <div class="row">
        <div class="col-xs-2">
          <input type="checkbox" />
        </div>
        <div class="col-xs-2">
          <i class={starred}></i>
        </div>
      </div>
    </div>
    <div class="col-xs-11">
      {devLabel(subject.labels)}
      {personalLabel(subject.labels)}
      {gSchoolLabel(subject.labels)}
      <a href="#">
        {subject.subject}
      </a>
    </div>
  </div>
)


};

export default Message;

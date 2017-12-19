import React from 'react';

const Message = ({subject}) => (

  <div class="row message read">
    <div class="col-xs-1">
      <div class="row">
        <div class="col-xs-2">
          <input type="checkbox" />
        </div>
        <div class="col-xs-2">
          <i class="star fa fa-star"></i>
        </div>
      </div>
    </div>
    <div class="col-xs-11">
      <span class="label label-warning">dev</span>
      <span class="label label-warning">gschool</span>
      <a href="#">
        {subject}
      </a>
    </div>
  </div>

);

export default Message;
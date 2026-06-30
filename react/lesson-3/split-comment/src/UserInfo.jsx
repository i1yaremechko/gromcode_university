import React from 'react';
import Avatar from './Avatar';

function UserInfo(props) {
  return (
    <React.Fragment>
      <div className='user-info'>
        <Avatar avatarUrl={props.user.avatarUrl} name={props.user.name} />
        <div className='user-info__name'>{props.user.name}</div>
      </div>
    </React.Fragment>
  );
}

export default UserInfo;
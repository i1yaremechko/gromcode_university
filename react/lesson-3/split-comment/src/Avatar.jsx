import React from 'react';

function Avatar(props) {
  return (
    <React.Fragment>
      <img className='avatar' src={props.avatarUrl} alt={props.name} />
    </React.Fragment>
  );
}

export default Avatar;
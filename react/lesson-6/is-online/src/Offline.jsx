import React from 'react';
React.version;

const Offline = () => {
  return (
    <div className='status'>
      <span className='status__text'>Offline</span>
      <button className='status__btn'>Reconnect</button>
    </div>
  );
};

export default Offline;
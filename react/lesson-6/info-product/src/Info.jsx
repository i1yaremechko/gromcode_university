import React from 'react';
React.version;

const Info = ({ info }) => {
  if (!info) return null;
  return (
    <div className='message'>
      {info}
    </div>
  );
};

export default Info;
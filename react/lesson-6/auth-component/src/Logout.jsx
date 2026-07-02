import React from 'react';
React.version;

const Logout = ({ onLogout }) => {
  return (
    <button className='logout btn' onClick={onLogout}>
      Logout
    </button>
  );
};

export default Logout;
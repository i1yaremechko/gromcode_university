import React from 'react';

const Logout = ({ onLogout }) => {
  return (
    <React.Fragment>
      <button className='btn logout' onClick={onLogout}>
        Logout
      </button>
    </React.Fragment>
  );
};

export default Logout;
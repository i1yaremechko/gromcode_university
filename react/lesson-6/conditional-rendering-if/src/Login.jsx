import React from 'react';

const Login = ({ onLogin }) => {
  return (
    <React.Fragment>
      <button className='btn login' onClick={onLogin}>
        Login
      </button>
    </React.Fragment>
  );
};

export default Login;
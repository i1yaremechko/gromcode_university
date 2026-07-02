import React from 'react';
React.version;

const Login = ({ onLogin }) => {
  return (
    <button className='login btn' onClick={onLogin}>
      Login
    </button>
  );
};

export default Login;
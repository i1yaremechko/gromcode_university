import React from 'react';

const GoodButton = () => {
  const handleClick = () => alert('Good job!');
  
  return (
    <React.Fragment>
    <button className='fancy-button' onClick={handleClick}>
      Click me!
    </button>
  </React.Fragment>
  );
};

export default GoodButton;
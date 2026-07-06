import React from 'react';
React.version;

const CartTitle = ({ count, userName }) => {
  return (
    <div className='cart-title'>
      {userName}, you added {count} items
    </div>
  );
};

export default CartTitle;
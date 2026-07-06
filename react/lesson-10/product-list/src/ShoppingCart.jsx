import React from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';
React.version;

const ShoppingCart = ({ userName, cartItems }) => {
  return (
    <div className='column'>
      <CartTitle userName={userName} count={cartItems.length} />
      <ProductsList cartItems={cartItems} />
    </div>
  );
};

export default ShoppingCart;
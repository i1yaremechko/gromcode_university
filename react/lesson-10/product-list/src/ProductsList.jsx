import React from 'react';
React.version;

const ProductsList = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="products">
      <ul className="products_list">
        {cartItems.map(item => (
          <li key={item.id} className="products_list-item">
            <span className="products_list-name">{item.name}</span>
            <span className="products_list-price">${item.price}</span>
          </li>
        ))}
      </ul>
      <div className="products_total">Total: ${total}</div>
    </div>
  );
};

export default ProductsList;
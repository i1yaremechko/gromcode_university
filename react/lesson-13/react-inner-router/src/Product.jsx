import React from 'react';
React.version;

const Product = ({ match }) => {
  return (
    <div className="product">
      {match.params.productId}
    </div>
  );
}

export default Product;
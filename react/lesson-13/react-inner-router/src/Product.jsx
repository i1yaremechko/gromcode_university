import React from 'react';
React.version;

const Product = ({ match }) => {
  return (
    <div class="product">
      {match.params.productId}
    </div>
  );
}

export default Product;
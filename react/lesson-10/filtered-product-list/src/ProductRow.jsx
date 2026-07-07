import React from 'react';
React.version;

function ProductRow({ product }) {
  const { stocked, name, price } = product;

  const productName = stocked ? name : (
    <span style={{ color: 'red' }}>
      {name}
    </span>
  );

  return (
    <tr>
      <td>{productName}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
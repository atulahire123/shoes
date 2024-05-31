// Product.js
import React from 'react';

const Product = ({ name, description, price, quantity, available, onAddToCart }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <p>Available: {available ? 'Yes' : 'No'}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
import React, { useState, useContext } from 'react';
import ProductContext from './ProductContext';

const ProductDetails = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h2>Product Details</h2>
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};

const ProductItem = ({ product }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  const handleBuy = (size) => {
    console.log(`Buying ${selectedQuantity} ${size} shoes`);
    // Implement functionality to add the selected quantity of shoes to the cart
  };

  const { shoeName, description, price, quantityL, quantityM, quantityS } = product;

  return (
    <div className="product-item">
      <p>Shoe Name: {shoeName}</p>
      <p>Description: {description}</p>
      <p>Price: {price}</p>
      
      <div>
        <h3>Select Quantity</h3>
        <input
          type="number"
          value={selectedQuantity}
          onChange={(e) => setSelectedQuantity(Number(e.target.value))}
        />
      </div>

      <div>
        <button onClick={() => handleBuy('Large')}>Buy Large ({quantityL} available)</button>
        <button onClick={() => handleBuy('Medium')}>Buy Medium ({quantityM} available)</button>
        <button onClick={() => handleBuy('Small')}>Buy Small ({quantityS} available)</button>
      </div>
    </div>
  );
};

export default ProductDetails;

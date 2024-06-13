import React, { useState } from 'react';

const ProductItem = ({ product, handleBuy }) => {
  const [selectedQuantities, setSelectedQuantities] = useState({ L: 0, M: 0, S: 0 });

  const { shoeName, description, price, quantityL, quantityM, quantityS } = product;

  const handleChange = (size, value) => {
    setSelectedQuantities(prevState => ({
      ...prevState,
      [size]: Number(value),
    }));
  };

  const handleBuyClick = () => {
    handleBuy(product, selectedQuantities);
  };

  return (
    <div className="product-item">
      <div className="product-details">
        <p><strong>Shoe Name:</strong> {shoeName}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Price:</strong> ${price}</p>
        <p><strong>Stock (Large):</strong> {quantityL}</p>
        <p><strong>Stock (Medium):</strong> {quantityM}</p>
        <p><strong>Stock (Small):</strong> {quantityS}</p>
      </div>
      <div className="product-actions">
        <h3>Select Quantity</h3>
        <div className="input-group">
          <label>Large:</label>
          <input
            type="number"
            value={selectedQuantities.L}
            onChange={(e) => handleChange('L', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Medium:</label>
          <input
            type="number"
            value={selectedQuantities.M}
            onChange={(e) => handleChange('M', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Small:</label>
          <input
            type="number"
            value={selectedQuantities.S}
            onChange={(e) => handleChange('S', e.target.value)}
          />
        </div>
        <button onClick={handleBuyClick}>Buy</button>
      </div>
    </div>
  );
};

export default ProductItem;

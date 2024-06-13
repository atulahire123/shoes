import React, { useState, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import './ProductItem.css';

const ProductItem = ({ product }) => {
  const { handleBuy } = useContext(ProductContext);
  const [selectedQuantities, setSelectedQuantities] = useState({ L: 0, M: 0, S: 0 });

  const handleChange = (size, value) => {
    setSelectedQuantities((prevState) => ({
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
        <p><strong>Shoe Name:</strong> {product.shoeName}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Stock (Large):</strong> {product.selectedQuantities?.L || 0}</p>
        <p><strong>Stock (Medium):</strong> {product.selectedQuantities?.M || 0}</p>
        <p><strong>Stock (Small):</strong> {product.selectedQuantities?.S || 0}</p>
      </div>
      <div className="product-actions">
        <h3>Select Quantity</h3>
        <div className="input-group-container">
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
        </div>
        <button onClick={handleBuyClick}>Buy</button>
      </div>
    </div>
  );
};

export default ProductItem;

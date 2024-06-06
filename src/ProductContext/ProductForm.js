import React, { useState, useContext } from 'react';
import ProductContext from './ProductContext';

const ProductForm = ({ onAddProduct }) => {
  const [shoeName, setShoeName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantityL, setQuantityL] = useState(0);
  const [quantityM, setQuantityM] = useState(0);
  const [quantityS, setQuantityS] = useState(0);
  const { addProduct } = useContext(ProductContext);

  const handleAddProduct = (e) => {
    e.preventDefault();
    addProduct({ shoeName, description, price, quantityL, quantityM, quantityS });
    // Clear form after adding product
    setShoeName('');
    setDescription('');
    setPrice(0);
    setQuantityL(0);
    setQuantityM(0);
    setQuantityS(0);
    onAddProduct(); // Show product details after adding product
  };

  return (
    <form className="form-container" onSubmit={handleAddProduct}>
      <div className="input-group">
        <label>Shoe Name:</label>
        <input type="text" value={shoeName} onChange={(e) => setShoeName(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      </div>
      <div className="input-group">
        <label>Quantity (L):</label>
        <input type="number" value={quantityL} onChange={(e) => setQuantityL(Number(e.target.value))} />
      </div>
      <div className="input-group">
        <label>Quantity (M):</label>
        <input type="number" value={quantityM} onChange={(e) => setQuantityM(Number(e.target.value))} />
      </div>
      <div className="input-group">
        <label>Quantity (S):</label>
        <input type="number" value={quantityS} onChange={(e) => setQuantityS(Number(e.target.value))} />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;

import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import './ProductForm.css';

const ProductForm = () => {
  const { addProduct } = useContext(ProductContext);
  const [product, setProduct] = useState({
    shoeName: '',
    description: '',
    price: 0,
    selectedQuantities: { L: 0, M: 0, S: 0 }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('selectedQuantities.')) {
      const size = name.split('.')[1];
      setProduct((prevProduct) => ({
        ...prevProduct,
        selectedQuantities: {
          ...prevProduct.selectedQuantities,
          [size]: Number(value),
        },
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ shoeName: '', description: '', price: 0, selectedQuantities: { L: 0, M: 0, S: 0 } }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2>Add Product</h2>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="shoeName">Shoe Name</label>
          <input type="text" id="shoeName" name="shoeName" value={product.shoeName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" value={product.description} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" value={product.price} onChange={handleChange} />
        </div>
        <div className="form-group quantity">
          <label htmlFor="quantityL">Qty (L)</label>
          <input type="number" id="quantityL" name="selectedQuantities.L" value={product.selectedQuantities.L} onChange={handleChange} />
        </div>
        <div className="form-group quantity">
          <label htmlFor="quantityM">Qty (M)</label>
          <input type="number" id="quantityM" name="selectedQuantities.M" value={product.selectedQuantities.M} onChange={handleChange} />
        </div>
        <div className="form-group quantity">
          <label htmlFor="quantityS">Qty (S)</label>
          <input type="number" id="quantityS" name="selectedQuantities.S" value={product.selectedQuantities.S} onChange={handleChange} />
        </div>
      </div>
      <div className="button-group">
        <button type="submit">Add Product</button>
  
      </div>
    </form>
  );
};

export default ProductForm;

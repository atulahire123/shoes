import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductItem from './ProductItem';
import './ProductDetails.css';

const ProductDetails = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h2>Product Details</h2>
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductDetails;

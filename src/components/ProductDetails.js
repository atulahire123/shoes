import React, { useState, useContext } from 'react';
import ProductContext from '../contexts/ProductContext';
import ProductModal from './ProductModal';
import ProductItem from './ProductItem';


const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuy = (product, selectedQuantities) => {
    setSelectedProduct({ ...product, selectedQuantities });
  };

  return (
    <div>
      <h2>Product Details</h2>
      {products.map((product, index) => (
        <ProductItem key={index} product={product} handleBuy={handleBuy} />
      ))}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductDetails;

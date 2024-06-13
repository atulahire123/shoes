import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductItem from './ProductItem';

const ProductList = () => {
  const { products, handleBuy } = useContext(ProductContext);

  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.shoeName} product={product} handleBuy={handleBuy} />
      ))}
    </div>
  );
};

export default ProductList;

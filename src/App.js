import React, { useState } from 'react';
import { ProductProvider } from './ProductContext/ProductContext';
import ProductForm from './ProductContext/ProductForm';
import ProductDetails from './ProductContext/ProductDetails';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  return (
    <ProductProvider>
      <div>
        <h1>Add Product</h1>
        <ProductForm onAddProduct={handleShowDetails} ></ProductForm>
        {showDetails && (
          <div>
            <h1>Product Details</h1>
            <ProductDetails ></ProductDetails>
          </div>
        )}
      </div>
    </ProductProvider>
  );
};

export default App;
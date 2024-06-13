import React, { useState } from 'react';
import { ProductProvider } from './contexts/ProductContext';
import ProductForm from './components/ProductForm';
import ProductDetails from './components/ProductDetails';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  return (
    <ProductProvider>
      <div>
        <h1>Add Product</h1>
        <ProductForm onAddProduct={handleShowDetails} />
        {showDetails && <ProductDetails />}
      </div>
    </ProductProvider>
  );
};

export default App;

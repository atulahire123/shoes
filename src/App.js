import React from 'react';
import { ProductProvider } from './contexts/ProductContext';
import ProductDetails from './components/ProductDetails';
import ProductForm from './components/ProductForm';
import ProductModal from './components/ProductModal';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <ProductForm />
        <ProductDetails />
        <ProductModal />
      </div>
    </ProductProvider>
  );
}

export default App;

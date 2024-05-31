import React from 'react';
import ProductList from './Product/ProductList'; // Update the path to './ProductList'
import Cart from './Cart/Cart'; // Update the path to './Cart'
import CartContextProvider from './Cart/CartContext'; // Update the path to './CartContext'

const products = [
  { id: 1, name: 'Navy Blue Armanis Shoes', description: 'Gucci shoes 100% cotton', price: 1299, quantity: 2000, available: true },
  { id: 2, name: 'Gucci Shoes', description: '100% cotton', price: 3697, quantity: 16, available: true },
];

const App = () => {
  return (
    <CartContextProvider>
      <div>
        <h1>Product List</h1>
        <ProductList products={products} ></ProductList>
        <h1>Shopping Cart</h1>
        <Cart ></Cart>
      </div>
    </CartContextProvider>
  );
};

export default App;
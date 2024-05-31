// CartContext.js
import React, { createContext, useState } from 'react';

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCart = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ items, addItem: addItemToCart, removeItem: removeItemFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
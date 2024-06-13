import React, { createContext, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleBuy = (product, selectedQuantities) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.shoeName === product.shoeName
    );
    const newCart = [...cart];

    if (existingProductIndex >= 0) {
      newCart[existingProductIndex].selectedQuantities = {
        L: newCart[existingProductIndex].selectedQuantities.L + selectedQuantities.L,
        M: newCart[existingProductIndex].selectedQuantities.M + selectedQuantities.M,
        S: newCart[existingProductIndex].selectedQuantities.S + selectedQuantities.S,
      };
    } else {
      newCart.push({ ...product, selectedQuantities });
    }

    setCart(newCart);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) =>
        total +
        item.price *
          (item.selectedQuantities.L +
            item.selectedQuantities.M +
            item.selectedQuantities.S),
      0
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        addProduct,
        handleBuy,
        closeModal,
        isModalOpen,
        calculateTotalPrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };

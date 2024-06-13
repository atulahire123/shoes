import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import './ProductModal.css';

const ProductModal = () => {
  const { cart, calculateTotalPrice, closeModal, isModalOpen } = useContext(ProductContext);

  if (!isModalOpen) {
    return null;
  }

  const handlePlaceOrder = () => {
    console.log('Place Order logic goes here');
    closeModal();
  };

  return (
    <div className="modal" role="dialog" aria-labelledby="modal-title" aria-modal="true">
      <div className="modal-content">
        <h3 id="modal-title">Order Summary</h3>
        {cart.map((item, index) => (
          <div key={index}>
            <p>Shoe Name: {item.shoeName}</p>
            <p>Description: {item.description}</p>
            <p>Price per Unit: ${item.price}</p>
            <p>Quantity (Large): {item.selectedQuantities.L}</p>
            <p>Quantity (Medium): {item.selectedQuantities.M}</p>
            <p>Quantity (Small): {item.selectedQuantities.S}</p>
          </div>
        ))}
        <p>Total Amount: ${calculateTotalPrice().toFixed(2)}</p>
        <div className="modal-buttons">
          <button onClick={handlePlaceOrder}>Place Order</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

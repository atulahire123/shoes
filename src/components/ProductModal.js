import React from 'react';

const ProductModal = ({ product, onClose }) => {
  const { shoeName, description, price, selectedQuantities } = product;

  const totalAmount = price * (selectedQuantities.L + selectedQuantities.M + selectedQuantities.S);

  const handlePlaceOrder = () => {
    console.log('Order placed for', product);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Order Summary</h3>
        <p>Shoe Name: {shoeName}</p>
        <p>Description: {description}</p>
        <p>Price per Unit: ${price}</p>
        <p>Quantity (Large): {selectedQuantities.L}</p>
        <p>Quantity (Medium): {selectedQuantities.M}</p>
        <p>Quantity (Small): {selectedQuantities.S}</p>
        <p>Total Amount: ${totalAmount}</p>
        
        <div>
          <button onClick={handlePlaceOrder}>Place Order</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

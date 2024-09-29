import React from 'react';

const CartList = ({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0); // Calculate total price

  return (
    <div className="cart-list">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.url} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <div className="product-name">{item.name}</div>
              <div className="quantity-controls">
                <button className="quantity-button" onClick={() => decreaseQuantity(item.name)}>-</button>
                {item.quantity}
                <button className="quantity-button" onClick={() => increaseQuantity(item.name)}>+</button>
              </div>
              <div className="price">₹{item.price}</div>
            </div>
            <button className="remove-button" onClick={() => removeFromCart(item.name)}>Remove</button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="total-price">
          Total Price: ₹{totalPrice}
        </div>
      )}
    </div>
  );
};

export default CartList;

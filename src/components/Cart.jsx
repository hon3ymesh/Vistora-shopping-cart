import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/global.css';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: parseInt(quantity) } });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 && <p>No items in the cart.</p>}
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>
          <p>₹{item.price} x </p>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
          />
          <p>= ₹{item.price * item.quantity}</p>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Total: ₹{totalPrice}</h3>
          <button onClick={() => alert('Checkout complete!')}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
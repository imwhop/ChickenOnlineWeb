import React, { useContext } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { items, updateQuantity, removeFromCart } = useContext(CartContext);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(1);
  const shipping = 5.0;
  const grandTotal = (parseFloat(subtotal) + shipping).toFixed(1);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">CART</h1>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <span className="empty-icon">🛒</span>
          <span className="empty-label">Your cart is empty.</span>
        </div>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Added Items</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td className="item-detail">
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </td>
                  <td>${item.price.toFixed(1)}</td>
                  <td>
                    <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(1)}</td>
                  <td>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✖</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="checkout-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span className="add-info">Add info</span>
            </div>
            <div className="summary-row total">
              <span>Grand total:</span>
              <span>${grandTotal}</span>
            </div>
            <button className="checkout-btn">
              <Link to="/checkout">PROCEED TO CHECKOUT</Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

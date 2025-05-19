import React, { useState } from 'react';
import './Cart.css';

const initialItems = [
  { id: 1, name: 'Group Combo B', price: 24.4, quantity: 1, image: '/group-combo.jpg' },
  { id: 2, name: 'Teriyaki Chicken Rice', price: 4.8, quantity: 3, image: '/teriyaki.jpg' },
  { id: 3, name: 'Cheese Fried Potatoes', price: 3.5, quantity: 3, image: '/cheese-potatoes.jpg' },
];

const CartPage = () => {
  const [items, setItems] = useState(initialItems);

  const updateQuantity = (id, delta) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity + delta) }
        : item
    ));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(1);
  const shipping = 5.0;
  const grandTotal = (parseFloat(subtotal) + shipping).toFixed(1);

  return (
    <div className="cart-container">
      <h1 className="cart-title">CART</h1>
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
              <td><button className="remove-btn">✖</button></td>
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
        <button className="checkout-btn">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartPage;

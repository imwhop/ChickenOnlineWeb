import React, { useContext } from 'react';
import FrenchFries from '../../assets/images/French Fries.png';
import MashPotatoes from '../../assets/images/Mashed Potatoes.png';
import CheeseFriedPotatoes from '../../assets/images/Cheese Fried Potatoes.png';

import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext'; // đúng đường dẫn

export default function MenuSideDishes() {
  const { addToCart } = useContext(CartContext); // ✅ Đặt đúng trong component
          const navigate = useNavigate();                // ✅ Đặt đúng trong component
        
          const handleOrder = (product) => {
            addToCart(product);
            navigate('/cart');
          };
  return (
    <div className="menu-content-area">
    <div className="product-container">
      <div className="product-card">
        <img src={FrenchFries} alt="French Fries" />
        <h3>French Fries</h3>
        <p>Price: 6.4 $</p>
        <button className="order-button"
          onClick={() =>
            handleOrder({
              id: 105,
              name: 'French Fries',
              price: 6.4,
              image: FrenchFries,})}>ORDER
        </button>
      </div>

      <div className="product-card">
        <img src={MashPotatoes} alt="Mashed Potatoes" />
        <h3>Mashed Potatoes</h3>
        <p>Price: 6.4 $</p>
        <button className="order-button"
          onClick={() =>
            handleOrder({
              id: 106,
              name: 'Mashed Potatoes',
              price: 6.4,
              image: MashPotatoes,})}>ORDER
        </button>
      </div>

      <div className="product-card">
        <img src={CheeseFriedPotatoes} alt="Cheese Fried Potatoes" />
        <h3>Cheese Fried Potatoes</h3>
        <p>Price: 6.4 $</p>
        <button className="order-button"
          onClick={() =>
            handleOrder({
              id: 107,
              name: 'Cheese Fried Potatoes',
              price: 6.4,
              image: CheeseFriedPotatoes,})}>ORDER
        </button>
      </div>
    </div>
    </div>
  );
}

import React, { useContext } from 'react';
import ChickenSpaghetti from '../../assets/images/Chicken Spaghetti.jpg';
import BonelessChickenspaghetti from '../../assets/images/Boneless Chicken Spaghetti.jpg';

import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext'; // đúng đường dẫn

export default function MenuSpaghetti() {
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
        <img src={ChickenSpaghetti} alt="Chicken Spaghetti" />
        <h3>Chicken Spaghetti</h3>
        <p>Price: 6.4 $</p>
        <button className="order-button"
          onClick={() =>
            handleOrder({
              id: 108,
              name: 'Chicken Spaghetti',
              price: 6.4,
              image: ChickenSpaghetti,})}>ORDER
        </button>
      </div>

      <div className="product-card">
        <img src={BonelessChickenspaghetti} alt="Boneless Chicken Spaghetti" />
        <h3>Boneless Chicken Spaghetti</h3>
        <p>Price: 6.4 $</p>
        <button className="order-button"
          onClick={() =>
            handleOrder({
              id: 109,
              name: 'Boneless Chicken Spaghetti',
              price: 6.4,
              image: BonelessChickenspaghetti,})}>ORDER
        </button>
      </div>
    </div>
    </div>
  );
}

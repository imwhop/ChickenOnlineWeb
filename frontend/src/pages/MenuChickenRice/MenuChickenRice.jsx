import React, { useContext } from 'react';
import SourChickenRice from '../../assets/images/Sweet and Sour Chicken Rice.jpg';
import TeriyakiChickenRice from '../../assets/images/Teriyaki Chicken Rice.jpg';

import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext'; // đúng đường dẫn

export default function MenuChickenRice() {
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
          <img src={SourChickenRice} alt="Chicken Rice" />
          <h3>Sweet and Sour Chicken Rice</h3>
          <p>Price: 6.4 $</p>
          <button className="order-button"
            onClick={() =>handleOrder({
                id: 101,
                name: 'Sweet and Sour Chicken Rice',
                price: 6.4, image: SourChickenRice,})}>ORDER
          </button>
        </div>

        <div className="product-card">
          <img src={TeriyakiChickenRice} alt="Chicken Rice" />
          <h3>Teriyaki Chicken Rice</h3>
          <p>Price: 6.4 $</p>
          <button className="order-button"
            onClick={() =>
              handleOrder({
                id: 102,
                name: 'Teriyaki Chicken Rice',
                price: 6.4,
                image: TeriyakiChickenRice,})}>ORDER
          </button>
        </div>
      </div>
    </div>
  );
}

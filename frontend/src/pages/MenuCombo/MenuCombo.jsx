import React, { useContext } from 'react';
import GroupComboB from '../../assets/images/Group Combo B.png';
import ComboA from '../../assets/images/Combo A.png';

import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext'; // đúng đường dẫn

export default function MenuCombo() {
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
            <img src={ComboA} alt="Combo A" />
            <h3>Combo A</h3>
            <p>Price: 6.4 $</p>
            <button className="order-button"
              onClick={() =>
                handleOrder({
                  id: 103,
                  name: 'Combo A',
                  price: 6.4,
                  image: ComboA,})}>ORDER
            </button>
          </div>

          <div className="product-card">
            <img src={GroupComboB} alt="Group Combo B" />
            <h3>Group Combo B</h3>
            <p>Price: 6.4 $</p>
            <button className="order-button"
              onClick={() =>
                handleOrder({
                  id: 104,
                  name: 'Group Combo B',
                  price: 6.4,
                  image: GroupComboB,})}>ORDER
            </button>
          </div>
        </div>
        </div>
  );
}

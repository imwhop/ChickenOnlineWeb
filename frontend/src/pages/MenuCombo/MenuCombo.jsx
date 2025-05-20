import React from 'react';
import GroupComboB from '../../assets/images/Group Combo B.png';
import ComboA from '../../assets/images/Combo A.png';

export default function MenuCombo() {
  return (
    <div className="menu-content-area">
    <div className="product-container">
          <div className="product-card">
            <img src={ComboA} alt="Combo A" />
            <h3>Combo A</h3>
            <p>Price: 6.4 $</p>
            <button className="order-button">ORDER</button>
          </div>

          <div className="product-card">
            <img src={GroupComboB} alt="Combo B" />
            <h3>Combo B</h3>
            <p>Price: 6.4 $</p>
            <button className="order-button">ORDER</button>
          </div>
        </div>
        </div>
  );
}

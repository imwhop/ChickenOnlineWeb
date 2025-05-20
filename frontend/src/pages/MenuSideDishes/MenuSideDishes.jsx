import React from 'react';
import FrenchFries from '../../assets/images/French Fries.png';
import MashPotatoes from '../../assets/images/Mashed Potatoes.png';
import CheeseFriedPotatoes from '../../assets/images/Cheese Fried Potatoes.png';

export default function MenuSideDishes() {
  return (
    <div className="menu-content-area">
    <div className="product-container">
      <div className="product-card">
        <img src={FrenchFries} alt="French Fries" />
        <h3>French Fries</h3>
        <p>Price: 6.4 $</p>
        <button className="order-button">ORDER</button>
      </div>

      <div className="product-card">
        <img src={MashPotatoes} alt="MashPotatoes" />
        <h3>Mashed Potatoes</h3>
        <p>Price: 6.4 $</p>
        <button className="order-button">ORDER</button>
      </div>

      <div className="product-card">
        <img src={CheeseFriedPotatoes} alt="Cheese Fried Potatoes" />
        <h3>Cheese Fried Potatoes</h3>
        <p>Price: 6.4 $</p>
        <button className="order-button">ORDER</button>
      </div>
    </div>
    </div>
  );
}

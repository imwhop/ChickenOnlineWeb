import React from 'react';
import ChickenSpaghetti from '../../assets/images/Chicken Spaghetti.jpg';
import BonelessChickenspaghetti from '../../assets/images/Boneless Chicken Spaghetti.jpg';
export default function MenuSpaghetti() {
  return (
    <div className="menu-content-area">
    <div className="product-container">
      <div className="product-card">
        <img src={ChickenSpaghetti} alt="Chicken Spaghetti" />
        <h3>Chicken Spaghetti</h3>
        <p>Price: 6.4 $</p>
        <button className="order-button">ORDER</button>
      </div>

      <div className="product-card">
        <img src={BonelessChickenspaghetti} alt="Boneless Chicken Spaghetti" />
        <h3>Boneless Chicken Spaghetti</h3>
        <p>Price: 6.4 $</p>
        <button className="order-button">ORDER</button>
      </div>
    </div>
    </div>
  );
}

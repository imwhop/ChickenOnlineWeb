import React from 'react';
import SourChickenRice from '../../assets/images/Sweet and Sour Chicken Rice.jpg';
import TeriyakiChickenRice from '../../assets/images/Teriyaki Chicken Rice.jpg';


export default function MenuChickenRice() {
  return (
    <div className="menu-content-area">
    <div className="product-container">
      <div className="product-card">
        <img src={SourChickenRice} alt="Chicken Rice" />
        <h3>Sweet and Sour Chicken Rice</h3>
        <p>Price: 6.4 $</p>
        <button className="order-button">ORDER</button>
      </div>

      <div className="product-card">
        <img src={TeriyakiChickenRice} alt="Chicken Rice" />
        <h3>Teriyaki Chicken Rice</h3>
        <p>Price: 6.4 $</p>
        <button className="order-button">ORDER</button>
      </div>
    </div>
    </div>    
  );
}

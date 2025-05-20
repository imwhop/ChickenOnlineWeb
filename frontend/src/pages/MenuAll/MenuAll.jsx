import React from 'react';
import SourChickenRice from '../../assets/images/Sweet and Sour Chicken Rice.jpg';
import TeriyakiChickenRice from '../../assets/images/Teriyaki Chicken Rice.jpg';
import BonelessChickenspaghetti from '../../assets/images/Boneless Chicken Spaghetti.jpg';
import ChickenSpaghetti from '../../assets/images/Chicken Spaghetti.jpg';
import ComboA from '../../assets/images/Combo A.png';
import GroupComboB from '../../assets/images/Group Combo B.png';
import FrenchFries from '../../assets/images/French Fries.png';
import MashPotatoes from '../../assets/images/Mashed Potatoes.png';
import CheeseFriedPotatoes from '../../assets/images/Cheese Fried Potatoes.png';

export default function MenuAll() {
    return (
        <div className="product-container">
            <div className="product-card">
                <img src={SourChickenRice} alt="Sweet and Sour Chicken Rice" />
                <h3>Sweet and Sour Chicken Rice</h3>
                <p>Price: 4.5 $</p>
                <button className="order-button">ORDER</button>
            </div>
            <div className="product-card">
                <img src={TeriyakiChickenRice} alt="Chicken Rice" />
                <h3>Teriyaki Chicken Rice</h3>
                <p>Price: 6.4 $</p>
                <button className="order-button">ORDER</button>
            </div>
            <div className="product-card">
                <img src={ChickenSpaghetti} alt="Chicken Spaghetti" />
                <h3>Chicken Spaghetti</h3>
                <p>Price: 6.4 $</p>
                <button className="order-button">ORDER</button>
            </div>  
            <div className="product-card">
                <img src={FrenchFries} alt="French Fries" />
                <h3>French Fries</h3>
                <p>Price: 3 $</p>
                <button className="order-button">ORDER</button>
            </div>
            <div className="product-card">
                <img src={GroupComboB} alt="Group Combo B" />
                <h3>Group Combo B</h3>
                <p>Price: 24.4 $</p>
                <button className="order-button">ORDER</button>
            </div>
            <div className="product-card">
                <img src={BonelessChickenspaghetti} alt="Boneless Chicken Spaghetti" />
                <h3>Boneless Chicken Spaghetti</h3>
                <p>Price: 6.4 $</p>
                <button className="order-button">ORDER</button>
            </div>
            <div className="product-card">
                <img src={ComboA} alt="Combo A" />
                <h3>Combo A</h3>
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
    );
}
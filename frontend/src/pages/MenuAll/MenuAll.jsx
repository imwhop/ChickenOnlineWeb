import React, { useContext } from 'react';
import SourChickenRice from '../../assets/images/Sweet and Sour Chicken Rice.jpg';
import TeriyakiChickenRice from '../../assets/images/Teriyaki Chicken Rice.jpg';
import BonelessChickenspaghetti from '../../assets/images/Boneless Chicken Spaghetti.jpg';
import ChickenSpaghetti from '../../assets/images/Chicken Spaghetti.jpg';
import ComboA from '../../assets/images/Combo A.png';
import GroupComboB from '../../assets/images/Group Combo B.png';
import FrenchFries from '../../assets/images/French Fries.png';
import MashPotatoes from '../../assets/images/Mashed Potatoes.png';
import CheeseFriedPotatoes from '../../assets/images/Cheese Fried Potatoes.png';

import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext'; // đúng đường dẫn

export default function MenuAll() {
    const { addToCart } = useContext(CartContext); // ✅ Đặt đúng trong component
      const navigate = useNavigate();                // ✅ Đặt đúng trong component
    
    const handleOrder = (product) => {
        addToCart(product);
        navigate('/cart');
    };
    return (
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
    );
}
import React from 'react';
import ChickenLogo from '../assets/images/Chicken logo.jpg';
import '../assets/images/styles/main.css';
 // Đảm bảo import file CSS của bạn
import { Link } from 'react-router-dom';


function Header() {
return (
    <header className="header fixed">
        <div className="main-content">
        <div className="body">
          {/* Logo Section */}
            <img src={ChickenLogo} alt="Chicken&Friend" className="logo" />
          {/* Navigation */}
            <nav className="nav">
            <ul style={{ listStyleType: 'none' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/restaurant">Restaurant</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/account">Account</Link></li>
            </ul>
            </nav>

        </div>
        </div>
    </header>
);
}

export default Header;
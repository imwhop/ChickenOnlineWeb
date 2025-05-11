import React from 'react';
import ChickenLogo from '../assets/images/Chicken logo.jpg';
import SearchIcon from '../assets/images/search.svg';
import '../assets/images/styles/main.css';
 // Đảm bảo import file CSS của bạn

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
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Menu</a></li>
                <li><a href="#!">News</a></li>
                <li><a href="#!">Restaurant</a></li>
                <li><a href="#!">About Us</a></li>
                <li><a href="#!">Cart</a></li>
            </ul>
            </nav>
            <div className="search-icon">
                <img src={SearchIcon} alt="Search" className="search" />
            </div>
        </div>
        </div>
    </header>
    );
}

export default Header;
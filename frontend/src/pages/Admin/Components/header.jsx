import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ChickenLogo from '../../../assets/images/Chicken logo.jpg';
import './header.css'; 

function Header() { 
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="admin-header">
            <img src={ChickenLogo} alt="Chicken&Friend" className="logo" />
            
            <h1 className="dashboard-title">Dashboard</h1>                           
            <div className={`menu-icon ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        
            {/* Popup Menu */}
            {showMenu && (
                <div className="popup-menu">
                    <ul>
                        <li>
                            <Link to="/admin">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/admin/customer">Customers</Link>
                        </li>
                        <li>
                            <Link to="/admin/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/admin/orders">Orders</Link>
                        </li>
                        <li>
                            <Link to="/admin/settings">Settings</Link>
                        </li>
                        <li>
                            <Link to="/admin/menu">Menu</Link>
                        </li>
                        <li className="divider">
                            <Link to="/home" className="logout">Logout</Link>
                        </li>
                        
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Header;
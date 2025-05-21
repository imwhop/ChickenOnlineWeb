import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarMenu.css';

export default function SidebarMenu() {
  return (
    <div className="sidebar-menu">
      <div style={{ height: '100px' }}></div> {/* spacer để hạ nút */}
      <Link to="/menu/spaghetti" className="menu-button">Spaghetti</Link>
      <Link to="/menu/chicken-rice" className="menu-button">Chicken Rice</Link>
      <Link to="/menu/combo" className="menu-button">Combo</Link>
      <Link to="/menu/side-dishes" className="menu-button">Side Dishes</Link>
    </div>
  );
}
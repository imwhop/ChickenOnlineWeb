import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarMenu from './SidebarMenu'; // đúng đường dẫn
import './Menu.css'; // style chung

export default function Menu() {
  return (
    <div className="menu-page-layout">
      <SidebarMenu />
      <div className="menu-main-content">
        <div className="menu-label">Product</div>
        <div className="menu-content-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
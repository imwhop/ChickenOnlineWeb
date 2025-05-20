import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarMenu from '../../components/SidebarMenu';
import './MenuPage.css';

export default function MenuPage() {
  return (
    <div className="menu-page-layout">
      <SidebarMenu />
      <div className="menu-main-content">
        <Outlet />
      </div>
    </div>
  );
}
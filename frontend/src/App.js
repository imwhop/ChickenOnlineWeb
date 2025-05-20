import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";
import './index.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu"; // nội dung chính khi vào /menu
import MenuAll from "./pages/MenuAll/MenuAll";
import MenuChickenRice from "./pages/MenuChickenRice/MenuChickenRice";
import MenuSpaghetti from "./pages/MenuSpaghetti/MenuSpaghetti";
import MenuCombo from "./pages/MenuCombo/MenuCombo";
import MenuSideDishes from "./pages/MenuSideDishes/MenuSideDishes";
import MenuPage from "./pages/Menu/Menu"; // layout chứa Sidebar + Outlet
import News from "./pages/News/News";
import Restaurant from "./pages/Restaurant/Restaurant";
import AboutUs from "./pages/AboutUs/AboutUs";
import Cart from "./pages/Cart/Cart";
import Account from "./pages/Account/Account";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import Checkout from "./pages/Checkout/Checkout"

import AdminHome from "./pages/Admin/DashBroad/DashBroad";
import AdminCustomer from "./pages/Admin/Customer/Customer";
import AdminOrders from "./pages/Admin/orders/order";
import AdminSetting from "./pages/Admin/setting/setting";
import AdminProduct from "./pages/Admin/products/products";

// Layout cho trang người dùng
function ClientLayout() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function AdminLayout() {
  return (
    <div className="admin-container">
      {/*Header -sidebar */}
      <div className="admin-content">
        <Outlet />
      </div>
      {/* footer*/}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
    
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/customer" element={<AdminCustomer />} />
          <Route path="/admin/products" element={<AdminProduct />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/settings" element={<AdminSetting />} />
        </Route>
        
        <Route element={<ClientLayout />}>
          <Route path="/home" element={<Home />} />
          
          {/* Route chứa sidebar bên trái */}
          <Route path="/menu" element={<MenuPage />}>
            <Route index element={<MenuAll />} /> {/* Trang mặc định của /menu */}
            <Route path="spaghetti" element={<MenuSpaghetti />} />
            <Route path="chicken-rice" element={<MenuChickenRice />} />
            <Route path="combo" element={<MenuCombo />} />
            <Route path="side-dishes" element={<MenuSideDishes />} />
          </Route>

          <Route path="/news" element={<News />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
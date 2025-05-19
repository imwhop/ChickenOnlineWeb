import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import './assets/images/styles/main.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import MenuChickenRice from "./pages/MenuChickenRice/MenuChickenRice";
import MenuSpaghetti from "./pages/MenuSpaghetti/MenuSpaghetti";
import MenuCombo from "./pages/MenuCombo/MenuCombo";
import MenuSideDishes from "./pages/MenuSideDishes/MenuSideDishes";
import News from "./pages/News/News";
import Restaurant from "./pages/Restaurant/Restaurant";
import AboutUs from "./pages/AboutUs/AboutUs";
import Cart from "./pages/Cart/Cart";
import Account from "./pages/Account/Account";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";

import AdminHome from "./pages/Admin/Home/Home";
import AdminCustomer from "./pages/Admin/Customer/Customer";

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
    
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/customer" element={<AdminCustomer />} />
        </Route>
        
 
        <Route element={<ClientLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/chicken-rice" element={<MenuChickenRice />} />
          <Route path="/menu/spaghetti" element={<MenuSpaghetti />} />
          <Route path="/menu/combo" element={<MenuCombo />} />
          <Route path="/menu/side-dishes" element={<MenuSideDishes />} />
          <Route path="/news" element={<News />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
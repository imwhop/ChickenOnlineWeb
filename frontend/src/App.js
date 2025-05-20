import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/images/styles/main.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu"; // nội dung chính khi vào /menu
import MenuAll from "./pages/MenuAll/MenuAll";
import MenuChickenRice from "./pages/MenuChickenRice/MenuChickenRice";
import MenuSpaghetti from "./pages/MenuSpaghetti/MenuSpaghetti";
import MenuCombo from "./pages/MenuCombo/MenuCombo";
import MenuSideDishes from "./pages/MenuSideDishes/MenuSideDishes";
import News from "./pages/News/News";
import Restaurant from "./pages/Restaurant/Restaurant";
import AboutUs from "./pages/AboutUs/AboutUs";
import Cart from "./pages/Cart/Cart";

import MenuPage from "./pages/Menu/Menu"; // layout chứa Sidebar + Outlet (tên file nên đổi thành Menu.jsx nếu bạn dùng như layout)

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />

            {/* Route chứa sidebar bên trái */}
            <Route path="/menu" element={<MenuPage />}>
              <Route index element={<MenuAll />} /> {/* 👈 Trang mặc định của /menu */}
              <Route path="spaghetti" element={<MenuSpaghetti />} />
              <Route path="chicken-rice" element={<MenuChickenRice />} />
              <Route path="combo" element={<MenuCombo />} />
              <Route path="side-dishes" element={<MenuSideDishes />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

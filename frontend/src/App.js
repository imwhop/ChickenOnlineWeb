import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="content">
            <Routes>
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
              </Routes>
        </div>  
        <Footer />       
      </div>
      
    </Router>

  );
}

export default App;

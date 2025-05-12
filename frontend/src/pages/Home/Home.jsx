import React from 'react';
import './Home.css'; 
import HotChicken from '../../assets/images/hotchicken.jpg'; // Đường dẫn đến hình ảnh
import SourChickenRice from '../../assets/images/Sweet and Sour Chicken Rice.jpg';
import ChickenSpaghetti from '../../assets/images/Chicken Spaghetti.jpg';
import FrenchFries from '../../assets/images/French Fries.png';
import GroupComboB from '../../assets/images/Group Combo B.png';
import backgroundImage from '../../assets/images/chicken-restaurant.jpg';   //tên file có khoảng trắng dễ bị lỗi hoặc không được webpack xử lý đúng.
import CheerHighLight from '../../assets/images/Cheer-Highlight.jpg'; 




function Home() {
  return (
    <div>
      {/* Hero Image Section */}
      <section className="hero">
        <img src={HotChicken} alt="HotChicken" className="hotchicken" />
      </section>
      {/* Product Section */}
      <section className="product-title">
        <h2>PRODUCTS</h2>
      </section>

      <section className="product-section">
      <div className="product-container">
        {/* product cards container */}
        <div className="product-card">
          <img src={SourChickenRice} alt="Sweet and Sour Chicken Rice" className="sourchickenrice"/>
          <h3>Sweet and Sour Chicken Rice</h3>
          <p>Price: 4,5 $</p>
          <button className="order-button">ORDER</button>
        </div>

        <div className="product-card">
          <img src={ChickenSpaghetti} alt="Chicken Spaghetti" className="chickenspaghetti"/>
          <h3>Chicken Spaghetti</h3>
          <p>Price: 6,4 $</p>
          <button className="order-button">ORDER</button>
        </div>

        <div className="product-card">
          <img src={FrenchFries} alt="French Fries" className="frenchfries" />
          <h3>French Fries</h3>
          <p>Price: 3 $</p>
          <button className="order-button">ORDER</button>
        </div>

        <div className="product-card">
          <img src={GroupComboB} alt="Group Combo B" className="groupcombob"/>
          <h3>Group Combo B</h3>
          <p>Price: 24,4 $</p>
          <button className="order-button">ORDER</button>
        </div>
      </div>
    </section>

        {/*Restaurant Locator */}
    <section
      className="restaurant-locator"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="locator-overlay">
        <div className="locator-form">
          <h2>
            FIND A <br />
            RESTAURANT <br />
            NEAR YOU
          </h2>
          <select>
            <option disabled selected hidden>City</option>
            <option>Ho Chi Minh</option>
          </select>
          <select>
            <option disabled selected hidden>District</option>
            <option>1</option>
            <option>3</option>
            <option>9</option>
          </select>
          <button>Search</button>
        </div>
      </div>
    </section>

    {/*Section Highlight */}
<section className ="section-highlight" 
      style={{
        backgroundImage: `url(${CheerHighLight})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
    <div className="highlight-content">
        <div className="highlight-text">
            <h2>About Friend & Chicken</h2>
            <p>
                We believe that fried chicken is more than just a meal,
                it's a fantastic way for friends and loved ones to gather and share joyful moments.
            </p>
            <p>
                At Friend & Chicken, you'll enjoy crispy, delicious fried chicken with a unique flavor, made from fresh ingredients and a special recipe. 
                Come to Friend & Chicken to experience the exquisite taste of fried chicken and create unforgettable memories!
            </p>
            <a href="#!" className="btn-more">Detail</a>
        </div>
        
    </div>
</section>



    </div>
  );
}

export default Home;

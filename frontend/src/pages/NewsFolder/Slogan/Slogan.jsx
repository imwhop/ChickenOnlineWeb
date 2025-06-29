import React, {useState, useEffect} from 'react';

import './Slogan.css'; 
import feedback1 from "../../../assets/images/customer feedback 1.jpg";
import feedback2 from "../../../assets/images/customer feedback 2.jpg";
import feedback3 from "../../../assets/images/customer feedback 3.jpg";
import food1 from "../../../assets/images/Chicken Spaghetti.jpg";
import food2 from "../../../assets/images/Group Combo B.png";
import food3 from "../../../assets/images/Combo A.png";
import Store from "../../../assets/images/cuahang.jpg";


const SlideImages =[
  require ('../../../assets/images/theme cho news 2.jpg'),
  require ('../../../assets/images/theme cho news 3.jpg'),
  require ('../../../assets/images/theme cho news 4.jpg'),
  require ('../../../assets/images/gamayo.jpg'),
];

function Slogan() {
    const [current,setCurrent] = useState(0);
  
    const nextSlide =()=>{
      setCurrent((prev) => (prev + 1) % SlideImages.length);
    };
  
    const prevSlide =() => {
      setCurrent ((prev) => (prev -1 + SlideImages.length) % SlideImages.length);
    };

    useEffect(() => {
      const interval = setInterval(nextSlide, 7000);
      return () => clearInterval(interval);
    }, []);


  return (

    <div className="Slogan-container">
      <section className="Slider-section">
        <button className="Arrow left" onClick={prevSlide}> ❮ </button>
        <img src={SlideImages[current]} alt="Promo" className="Slider-image" />
        <button className="Arrow right" onClick={nextSlide}> ❯ </button>
      </section>


      {/* SLOGAN SECTION */}
        <div className="slogan-title">
          <h2>Slogan and story</h2>
        </div>
      <div className="slogan-section">
        <img src={Store} alt="cuahang" />
        <div className="slogan-content">
          <p>
            Our chicken is marinated with our special recipe and fried to golden
            perfection. From classic combos to spicy favorites, we’ve got
            something for everyone.
            <br />
            <br />
            Whether you’re hanging out with friends or grabbing a quick bite,
            friends & Chicken is where good food and good vibes meet.
            <br />
            Come for the chicken – stay for the friendship!
          </p>
        </div>
      </div>

      {/* FEEDBACK SECTION */}
      <div className="feedback-box">
        <div className="feedback-title">
          <h2>Feedback</h2>
        </div>
        <div className="feedback-cards">
          <div className="card">
            <img src={feedback1} className="avatar"alt="Customer 1"/>
            <p>The fried chicken was crispy and delicious! Great flavor and fast service.</p>
            <div className="stars">⭐️⭐️⭐️⭐️</div>
            <img src={food1} className="food-img" alt="Chicken Spaghetti"/>
            <div className="food-name">Chicken Spaghetti</div>
          </div>

          <div className="card">
            <img src={feedback2} className="avatar" alt="Customer 2" />
            <p>Best fried chicken I’ve had in a long time. Highly recommended!</p>
            <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
            <img src={food2} className="food-img"alt="Group Combo B" />
            <div className="food-name">Group combo B</div>
          </div>

          <div className="card">
            <img src={feedback3} className="avatar"alt="Customer 3"/>
            <p>Absolutely loved the seasoning! Will definitely come again.</p>
            <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
            <img src={food3} className="food-img"  alt="Combo A"/>
            <div className="food-name">Combo A</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Slogan;

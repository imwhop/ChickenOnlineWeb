import React, {useState,useEffect} from 'react';
import './Event.css'; 

import Happyhour from "../../../assets/images/20discount.jpg";
import Challenge from "../../../assets/images/thu thach.jpg";
import Restaurant from "../../../assets/images/cuahang.jpg";

const ChickenImages =[
  require ('../../../assets/images/theme cho news 2.jpg'),
  require ('../../../assets/images/theme cho news 3.jpg'),
  require ('../../../assets/images/theme cho news 4.jpg'),
  require ('../../../assets/images/gamayo.jpg'),
];

function Event() {
  const [current,setCurrent] = useState(0);

  const nextSlide =()=>{
    setCurrent((prev) => (prev + 1) % ChickenImages.length);
  };

  const prevSlide =() => {
    setCurrent ((prev) => (prev -1 + ChickenImages.length) % ChickenImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="Event-container">
      <section className ="slider-section">
        <button className ="arrow left" onClick={prevSlide}> ❮ </button>
        <img src ={ChickenImages[current]} alt="Promo" className ="slider-image" />
        <button className ="arrow right" onClick={nextSlide}> ❯ </button>
      </section>

      <section className="happy-hour">
              <img src={Happyhour} alt="happy hour" /> {/* set link hình ở đầu để flex box thì hình xuất hiện đầu tiên*/}
      <div className="happy-hour-text">
        <h2>Happy Hour Deals</h2>
        <p>
          Happy Hour - from 2-5 PM,<br/>
          Monday to Friday!
        </p>
      </div>
      </section>

      <section className="challenge">
      <div className="challenge-text">
        <h2>Fried Chicken Challenge</h2>
        <p>
          Think you can handle our spicy chicken?<br/>
          Join the Fried Chicken Challenge and win a Free meal!
        </p>
      </div>
      <img src={Challenge} alt="challenge" />
      </section>


    </div>
  );
};



export default Event;

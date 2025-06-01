import React from 'react';
import './Event.css'; 
import Happyhour from "../../../assets/images/20%.jpg";
import Challenge from "../../../assets/images/thu thach.jpg";
import Restaurant from "../../../assets/images/cua hang.jpg";

function Event() {
  
  return (
    <div className="container">
      {/* Happy Hour Section */}
      <section className="happy-hour">
        <img src={Happyhour} alt="20% OFF" />
        <div className="happy-text">
          <h2>Happy Hour Deals</h2>
          <p>
            Happy Hour – from 2–5 PM,<br />
            Monday to Friday!
          </p>
        </div>
      </section>

      {/* Fried Chicken Challenge */}
      <section className="challenge">
        <div className="challenge-text">
          <h2>Fried Chicken Challenge</h2>
          <p>
            Think you can handle our spicy chicken?<br />
            Join the challenge and win a FREE combo!
          </p>
        </div>
        <img src={Challenge} alt="challenge"  />
      </section>

      {/* Restaurant Image */}
      <section className="restaurant">
        <img src={Restaurant} alt="Restaurant Interior" />
      </section>
    </div>
  );
};



export default Event;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './New.css'; 
import ChickenRestaurant from '../../../assets/images/chicken-restaurant.jpg'; 
import Slogan  from '../../../assets/images/cuahang.jpg';
import Event from '../../../assets/images/thu thach.jpg';






/*export default function News() {
  return (
    <div>
      <h2>Thong tin</h2>
    </div>
  );
}*/



function News() {
  const navigate = useNavigate();

  return (
    <div className="body">
      {/* NEWS section */}
      <div className="news-section">
        <img src= {ChickenRestaurant} alt="chicken restaurant shop" className="ChickenRestaurant" />
        <h1 className="news-title">NEWS</h1>
      </div>

      {/* Slogan and Story section */}
      <div className="sloganandstory-sections" onClick={() => navigate('/News/Slogan')} style={{ cursor: 'pointer' }}>
        <img src={Slogan} alt="Slogan and story" className="Slogan" />
        <div className="slogan-all">
          <h2 className="sloganandstory-title">Slogan and story</h2>
          <p className="sloganandstory-text">
            "At Friends & Chicken, we pride ourselves on crispy, flavorful chicken and a cozy, friendly atmosphere that keeps customers coming back."
          </p>
        </div>
      </div>

      {/* Event section */}
      <div className="event-section" onClick={() => navigate('/News/Event')} style={{ cursor: 'pointer' }}>
        <div className="event-all">
          <h2 className="event-title">Event and deals hot every season.</h2>
          <p className="event-text">
            "We’re open from 8 AM to 10 AM – the perfect time to start your day with crispy, hot chicken! Come by and taste the crunch everyone’s talking about!"
          </p>
        </div>
        <img src={Event} alt="Event" className="Event" />
      </div>
    </div>
  );
}

export default News;

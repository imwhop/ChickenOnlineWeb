import React from 'react';
import './AboutUs.css'; 
import ChickenHeader from '../../assets/images/1513628022992-DRNqAu2UEAAhIbj.png';
import ChickkenInfo from '../../assets/images/gamayo.jpg';


export default function AboutUs() {
  return (
  <div className='Box-AboutUs'>
    <div className='About-Header'>
          <h2 className="About-Title">ABOUT</h2>
        <img src = {ChickenHeader} alt = 'Fried chicken dish at Friend & Chicken A' className='ChickenHeader' />
    </div>
    <div className='StoreInfo'>
      <div className='text'>
        <h1>FRIEND & CHICKEN </h1>
        <h3>Friend & Chicken was originally just a group project by the four of us. But with a shared passion for crispy fried chicken, we decided to turn it into a real startup. What began as an assignment quickly became our dream business — bringing delicious, golden chicken to hungry customers everywhere. 
         With love, laughter, and a whole lot of oil, we proudly present ourselves as the first generation of a three-generation fried chicken empire.</h3>
         <h2>Where the grease runs deep in the family.</h2>
      </div>           
          <img src = {ChickkenInfo} alt = '' className='image' /> 
    </div>
      <div className="image-section">
        <div className="image-bar" />
       <div className='rectangle' />
      </div>
      <div className='TeamInfo'>
          <h2>Nguyen Thai Bao</h2>
          <h2>Vu Viet Hung</h2>
          <h2>Do Gia Bao</h2>
          <h2>Le Dao Thai Tai</h2>
          <h2>Nguyen Nhat Anh</h2>
      </div>
  </div>
  );
}

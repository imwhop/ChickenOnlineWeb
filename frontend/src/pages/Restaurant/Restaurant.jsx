import React from 'react';
import CityDropdown from './CityDropDown';
import DistrictDropDown from './DistrictDropDown';
import GoogleMap from './GoogleMap';
import './Restaurant.css';

function Restaurant() {

  return (
  <div>
    <div className='Restaurant-Venue'>
      <h1>FRIEND & CHICKEN RESTAURANTS</h1>


      <div className='location-bar'>
        <CityDropdown />
      <DistrictDropDown />
      <div className='search-box'>Search</div>
    </div>

    <div className='Store-Info'> 
      <div className="store-item" style={{lineHeight: '2', marginBottom:'8px', padding:'20px',marginTop: '150px'}}>
        Friend & Chicken A <br />
        Address: 25 Le Van Viet Street, Hiep Phu , District 9, Ho Chi Minh City, Vietnam <br />
        Opening hours : 8AM - 22PM <br />
        Phone number: (+84) 9652001384 <br/>
      </div>
      <div className="store-item"style={{lineHeight: '2', marginBottom:'8px', padding:'20px', marginTop: '150px'}}>
        Friend & Chicken B <br />
        Address: 30 Pham Ngoc Thach, Ward 6, District 3, Ho Chi Minh City, Vietnam  <br />
        Opening hours : 8AM - 22PM <br />
        Phone number: (+84) 893453920 <br/>
      </div>
      <div className="store-item"style={{lineHeight: '2', marginBottom:'8px', padding:'20px'}}>
        Friend & Chicken C <br />
        Address: 59b Nguyen Du Street, Ben Nghe, District 1, Ho Chi Minh City, Vietnam <br />
        Opening hours : 8AM - 22PM <br />
        Phone number: (+84) 7523964534 <br/>
      </div>
    </div>  
  </div>
  <GoogleMap />


</div>




  );
}

export default Restaurant;

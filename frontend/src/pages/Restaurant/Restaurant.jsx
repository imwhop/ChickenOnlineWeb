import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CityDropdown from './CityDropDown';
import DistrictDropDown from './DistrictDropDown';
import GoogleMap from './GoogleMap';
import './Restaurant.css';

function Restaurant() {
  const location = useLocation();
  const initialCity = location.state?.city || '';
  const initialDistrict = location.state?.district || '';

  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [selectedDistrict, setSelectedDistrict] = useState(initialDistrict);
  const [filteredStores, setFilteredStores] = useState([]);

  const storeData = [
    {
      name: 'Friend & Chicken A',
      address: '25 Le Van Viet Street, Hiep Phu , District 9, Ho Chi Minh City, Vietnam',
      hours: '8AM - 22PM',
      phone: '(+84) 9652001384',
      city: 'Ho Chi Minh',
      district: 'District 9'
    },
    {
      name: 'Friend & Chicken B',
      address: '30 Pham Ngoc Thach, Ward 6, District 3, Ho Chi Minh City, Vietnam',
      hours: '8AM - 22PM',
      phone: '(+84) 893453920',
      city: 'Ho Chi Minh',
      district: 'District 3'
    },
    {
      name: 'Friend & Chicken C',
      address: '59b Nguyen Du Street, Ben Nghe, District 1, Ho Chi Minh City, Vietnam',
      hours: '8AM - 22PM',
      phone: '(+84) 7523964534',
      city: 'Ho Chi Minh',
      district: 'District 1'
    }
  ];

  const handleSearch = () => {
    const result = storeData.filter(store =>
      store.city === selectedCity && store.district === selectedDistrict
    );
    setFilteredStores(result);
  };

  // Tự động tìm kiếm nếu nhận được state từ Home.jsx
  useEffect(() => {
    if (initialCity && initialDistrict) {
      handleSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  return (
    <div className='Restaurant-Container'>
      <div className='Restaurant-Venue'>
        <h1>FRIEND & CHICKEN RESTAURANTS</h1>
        <div className='location-bar'>
          <CityDropdown selectedCity={selectedCity} onCityChange={setSelectedCity} />
          <DistrictDropDown selectedDistrict={selectedDistrict} onDistrictChange={setSelectedDistrict} />
          <div className='search-box' onClick={handleSearch}>Search</div>
        </div>

        <div className='Store-Info'>
          {filteredStores.length > 0 ? (
            filteredStores.map((store, index) => (
              <div className="store-item" key={index}>
                {store.name}<br />
                Address: {store.address}<br />
                Opening hours: {store.hours}<br />
                Phone number: {store.phone}<br />
              </div>
            ))
          ) : (
            <div style={{ margin: '20px', fontSize: '18px' }}>
              No store selected or no results found.
            </div>
          )}
        </div>
      </div>
      <GoogleMap />
    </div>
  );
}

export default Restaurant;

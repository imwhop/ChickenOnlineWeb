import React from 'react';
import CityDropdown from './CityDropDown';
import DistrictDropDown from './DistrictDropDown';

function Restaurant() {
  console.log("RENDERING RESTAURANT PAGE");
  return (
  <div className='Restaurant Info'> 
    <h1>FRIEND & CHICKEN RESTAURANTS</h1> 

    <section className='Location Selection'> 
       <div> <CityDropdown /> </div> 
       <div> <DistrictDropDown /> </div>
    </section>

   
  
  </div>
  



  );
}

export default Restaurant;

import { useState } from "react";

function CityDropDown () { 
    const [selectedCity, setSelectedCity] = useState  ('')
    const cities = ['Ha Noi', 'Ho Chi Minh' , 'Can Tho'];
    const handleOnChange = (event) => {
        setSelectedCity(event.target.value);
    }
return (
    <div style = {{ margin: '20px'}} >
        <select 
        id="city-select"
        value={selectedCity} onChange={handleOnChange}
             style = {{padding: '8px', fontSize: '24px', borderRadius: '10px', width: '410px', height: '80px'}}
        >
        <option value = "">City</option>
        { cities.map((city, index) => (
            <option value={city} key ={index}>{city}</option>
        ))}
            
        </select>


    </div>
) ;
}
export default CityDropDown
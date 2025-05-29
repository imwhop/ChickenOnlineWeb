function CityDropDown({ selectedCity, onCityChange }) {
    const cities = ['Ho Chi Minh'];
    
    return (
        <div style={{ margin: '20px' }}>
            <select
                id="city-select"
                value={selectedCity}
                onChange={(e) => onCityChange(e.target.value)}
                style={{
                    padding: '20px',
                    fontSize: '18px',
                    borderRadius: '20px',
                    width: '300px',
                    height: '70px'
                }}
            >
                <option value="" disabled hidden>City</option>
                {cities.map((city, index) => (
                    <option value={city} key={index}>{city}</option>
                ))}
            </select>
        </div>
    );
}

export default CityDropDown;

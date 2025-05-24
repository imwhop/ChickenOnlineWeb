function DistrictDropDown({ selectedDistrict, onDistrictChange }) {
    const districts = ['District 1', 'District 9', 'District 3'];

    return (
        <div style={{ margin: '20px' }}>
            <select
                id="district-select"
                value={selectedDistrict}
                onChange={(e) => onDistrictChange(e.target.value)}
                style={{
                    padding: '20px',
                    fontSize: '18px',
                    borderRadius: '20px',
                    width: '300px',
                    height: '70px'
                }}
            >
                <option value="" disabled hidden>District</option>
                {districts.map((district, index) => (
                    <option value={district} key={index}>{district}</option>
                ))}
            </select>
        </div>
    );
}

export default DistrictDropDown;

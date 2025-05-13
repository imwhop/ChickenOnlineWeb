import { useState } from "react";

function DistrictDropDown() { 
    const [districtSelected, setdistrictSelected] = useState ("")
    const districs = ['District 1', 'District 9' , 'District 3'];
    const handleOnChange = (event) => {
        setdistrictSelected(event.target.value);
    } 
 return (
    <div style={{margin:'20px'}}>
        <select id= "distict-select"
                value = {districtSelected} onChange = {handleOnChange} 
                style = {{padding: '8px', fontSize: '24px', borderRadius: '10px', width: '410px', height: '80px'}}
        >
            <option value={""}>District</option>
            {
                districs.map((district, index) =>(
                   <option value={district} key= {index}>{district}</option>
            ))}
        </select>
    </div>


 );}
export default DistrictDropDown
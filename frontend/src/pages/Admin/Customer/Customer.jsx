import React, { useState } from 'react';
import Header from "../Components/header";

import './Customer.css'; 

function Customers () { 
    return (
         <div>
                    <Header />
            <div className="dashboard-content">
                <h2>Welcome, <span style={{color: 'red'}}>Admin!</span></h2>
                <h3>How are you doing</h3>
                <div className='crudAccount-container'>
                    <h3>Customer list</h3>
                </div>
            </div>
         </div>
    );
}
export default Customers; 
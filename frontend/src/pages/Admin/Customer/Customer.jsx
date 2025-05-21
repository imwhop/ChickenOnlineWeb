import React, { useState } from 'react';
import Header from "../Components/header";
import './Customer.css'; 

function Customers () { 
    return (
        <div>
            <Header />
            <div className="dashboard-content">
                <h2 style={{ fontSize: '50px', marginLeft: '30px' }}>
                    Welcome, <span style={{ color: 'red' }}>Admin!</span>
                </h2>
                <h3 style={{ fontSize: '30px', marginLeft: '30px' }}>
                    How are you doing?
                </h3>

                <div className='crudAccount-container'>
                    <h3 style={{fontSize:'20px', padding: '30px'}}>Customer list</h3>
                    <div className='account-panel'>
                        <div className='staffList'>
                            <h3>Vu Viet Hung</h3>
                            <div className='rectangle'></div>
                        </div>

                        <div className='crud-panel'>   

                        </div>                     
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Customers; 

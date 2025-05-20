import React, { useState } from 'react';
import './DashBroad.css'; 
import Header from "../Components/header";

function DashBroad() {
    return (
        <div>
            <Header />
            <div className="dashboard-content">
                <h2 style={{fontSize:'50px',  marginLeft:'30px' }}>Welcome, <span style={{color: 'red'}}>Admin!</span></h2>
                <h3 style={{fontSize:'30px', marginLeft: '30px'}}>How are you doing?</h3>
                
            </div>
        </div>
    );
}

export default DashBroad;
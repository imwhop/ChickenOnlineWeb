import React, { useState } from 'react';
import Header from "../Components/header";
import './setting.css';

function setting() { 
    return (
        <div> 
             <Header />
            <div className="order-content">
                <h2>Welcome to Admin Dashboard</h2>
            </div>
        </div>
    );
}

export default setting;
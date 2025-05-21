import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';     //hàm này được sử dụng đẻ chuyển hướng đến các route khác nhau 
import './DashBroad.css'; 
import Header from "../Components/header";

function DashBroad() {
    const navigate = useNavigate();

    const handleOrdersClick = () => {
        navigate('/admin/orders');
    };

    const handleProductClick = () => {
        navigate('/admin/products');
    };

    return (
        <div>
            <Header />
            <div className="dashboard-content">
                <h2 style={{fontSize:'50px',  marginLeft:'30px' }}>Welcome, <span style={{color: 'red'}}>Admin!</span></h2>
                <h3 style={{fontSize:'30px', marginLeft: '30px'}}>How are you doing?</h3>
                <div className='content-top'>
                    <div className='count-revenue'>
                        <h3 style={{padding: '30px'}}>Today Order: </h3>
                        <h3 style={{padding: '30px'}}>Daily Revenue: </h3>
                        <h3 style={{padding: '30px'}}>Weekly Revenue: </h3>
                        <h3 style={{padding: '30px'}}>Monthly Renvenue: </h3>
                    </div>
                    <div className='quick-button'>
                        <div className='customer-button' onClick={handleOrdersClick} style={{ cursor: 'pointer' }}>
                            <h3 style={{padding:'20px',
                                        color: '#FFFF',
                                        fontSize: '36px',
                                        marginTop: '20px'
                            }}>          Orders</h3>
                        </div>
                        <div className='product-button' onClick={handleProductClick} style={{ cursor: 'pointer' }}>
                            <h3 style={{padding:'20px',
                                        color: '#FFFF',
                                        fontSize: '36px',
                                        marginTop: '20px'
                            }}>         Product</h3>
                        </div>             
                    </div>
                </div>
                <div className='Top-selling-product'>
                    <h3 style={{fontSize: '22px', padding:'10px',  marginleft: '10px'}}>Top Selling Producs</h3>
                    <div className='label-product'>
                        <h3>Rank</h3>
                        <h3>Product</h3>
                        <h3>Name</h3>
                        <h3>Price</h3>
                        <h3>Rating</h3>
                    </div>

                    <div className='Product'>
                        <div className='rank-product'></div>
                        <div className='picture-product'></div>
                        <div className='name-product'>Sweet and Sour Chicken Rice</div>
                        <div className='price-product'>4,5$</div>
                        <div className='rating-product'>5 star</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBroad;
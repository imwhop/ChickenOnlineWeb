import React from 'react';
import Header from "../Components/header";
import { useNavigate } from 'react-router-dom'; 
import './order.css'; 

function Orders() { 
    const navigate = useNavigate(); 
    const handleOrdersClick = () => { 
        navigate('/admin');
    };
    return (
        <div>
            <Header />
            <div className="dashboard-content">
                <h2 style={{fontSize:'50px',  marginLeft:'30px' }}>Welcome, <span style={{color: 'red'}}>Admin!</span></h2>
                <h3 style={{fontSize:'30px', marginLeft: '30px'}}>How are you doing?</h3>
                <div className='content-top'>
                    
                    <div className='quick-button' onClick={handleOrdersClick} style={{cursor:'pointer'}}>
                        <div className='orders-button'>
                            <h3 style={{padding:'20px',
                                        color: '#FFFF',
                                        fontSize: '36px',
                                        marginTop: '20px'
                            }}>          Orders</h3>
                      
                        </div>             
                    </div>
                </div>
                <div className='order-table'>
                    
                    <div className='label-orders'>
                        <h3>ID</h3>
                        <h3>Time</h3>
                        <h3>Items ordered</h3>
                        <h3>Qty</h3>
                        <h3>Total</h3>
                        <h3>Payment</h3>
                    </div>

                    <div className='orders'>
                        <div className='ID-order'>#1021</div>
                        <div className='time-order'>8:00 AM</div>
                        <div className= 'ordered-order'>Sweet and Sour Chicken Rice</div>
                        <div className='qty-order'>1</div>
                        <div className='total-order'>4,5$</div>
                        <div className='payment-order'>Cash</div>  

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;

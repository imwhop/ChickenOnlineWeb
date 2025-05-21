import React from 'react';
import Header from "../Components/header";
import { useNavigate } from 'react-router-dom'; 
import './products.css'; 

function Products() { 
    const navigate = useNavigate() ; 
    const handleProductClick = () => { 
        navigate('/admin');
    };
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
                
                <div className='quick-button' onClick={handleProductClick} style={{cursor:'pointer'}}>
                        <div className='orders-button'>
                            <h3 style={{padding:'20px',
                                        color: '#FFFF',
                                        fontSize: '36px',
                                        marginTop: '20px'
                            }}>          Product</h3>
                      
                        </div>             
                    </div>

                <div className='product-admin-container'> 
                    <div className='label'>
                        <h3>Prodcut</h3>
                        <h3>Name</h3>
                        <h3>Price</h3>
                        <h3>Edit</h3>
                    </div>
                    <div className='panel'>
                         <div className='panel-picture'></div>
                         <div className='panel-name'>Sweet and sour chicken rice</div>
                         <div className='panel-price'>4.5$</div>
                         <div className='panel-edit'>Edit</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;

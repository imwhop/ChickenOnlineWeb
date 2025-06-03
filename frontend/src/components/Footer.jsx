import React from 'react';

function Footer(){
    return( 
        <footer className="footer">
        <div className="footer-section">
            <h3>FRIEND & CHICKEN</h3>
            <p><span className="icon">📍</span> TPHCM</p>
            <p><span className="icon">📞</span> (+84) 789822628</p>
            <p><span className="icon">📧</span> Friend&Chicken@gmail.com</p>
            <p><span className="icon">🌐</span> Friend&Chicken.com</p>
        </div>
        <div className="footer-section">
            <h3>Information</h3>
            <p><a href="./Home">Home</a></p>
            <p><a href="./Menu">Menu</a></p>
            <p><a href="./Restaurant">Restaurant</a></p>
        </div>
        <div className="footer-section">
            <h3>Connect with Friend & Chicken</h3>
            <p><a href="#!">Facebook</a></p>
            <p><a href="#!">Instagram</a></p>
        </div>
</footer>
    );
}

export default Footer;
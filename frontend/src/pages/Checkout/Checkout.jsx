import React from "react";
import "./Checkout.css";


const Checkout = () => {
    return(
        <div className="checkout-container">
            <h1 className="checkout-title"> SECURE CHECKOUT</h1>

            <div className="checkout-section">
                <div className="delivery-info">
                    <h2>DELIVERY FROM:</h2>
                    <p>
                        <strong>Friend & Chicken A</strong><br />
                        25 Le Van Viet Street, Hiep Phu, District 9, Ho Chi Minh City, VietNam
                    </p>
                </div>

                <form className="checkout-form">
                    <h3>ADD YOUR DETAILS:</h3>
                    <input type="text" placeholder="First Name *" required />
                    <input type="text" placeholder="Last Name *" required />
                    <input type="tel" placeholder="Phone Number *" required />
                    <input type="email" placeholder="Email *" required />
                    <input type="text" placeholder="Address *" required />
                </form>

                <div className="section">
                    <h4>PAYMENT METHOD</h4>
                    <button>Pay by Cash</button>
                    <button>Pay by ATM and Visa/MasterCard</button>
                </div>

                <div className="summary-box">
                    <p>Subtotal: $49.3</p>
                    <p>Shipping: $5</p>
                    <p>Grand total: $54.3</p>
                    <button className="finish-btn">Finish</button>
                </div>
                
            </div>
        </div>
    )
}

export default Checkout;
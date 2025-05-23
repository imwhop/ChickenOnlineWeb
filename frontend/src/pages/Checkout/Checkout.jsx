// SecureCheckout.jsx
import React from 'react';
import './Checkout.css';
import { Lock, CreditCard, DollarSign } from 'lucide-react'; // Optional icons

const Checkout = () => {
  return (
    <div className="checkout-container">
      <header className="checkout-header">
        <Lock className="icon" />
        <h1>SECURE CHECKOUT</h1>
      </header>

      <div className="checkout-body">
        {/* Left Column */}
        <div className="checkout-left">
          <section className="box">
            <h2>DELIVERY FROM:</h2>
            <p className="store-name">Friend & Chicken A</p>
            <p className="address">25 Le Van Viet Street, Hiep Phu, District 9, Ho Chi Minh City, Vietnam</p>
          </section>

          <section className="box">
            <h2>ADD YOUR DETAILS:</h2>
            <form className="details-form">
              <input type="text" placeholder="First Name *" />
              <input type="text" placeholder="Last Name *" />
              <input type="tel" placeholder="Phone Number *" />
              <input type="email" placeholder="Email *" />
              <input type="text" placeholder="Address *" />
            </form>
          </section>

          <section>
            <h2>PAYMENT METHOD</h2>
            <div className="payment-option">
              <span>Pay by Cash</span>
              <DollarSign size={18} />
            </div>
            <div className="payment-option">
              <span>Pay by ATM and Visa/Master Card</span>
              <CreditCard size={18} />
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="checkout-right">
          <div className="summary-box">
            <div className="summary-row"><span>Subtotal:</span><span>$6.63</span></div>
            <div className="summary-row"><span>Shipping:</span><span>$3</span></div>
            <hr />
            <div className="summary-row total"><span>Grand total:</span><span>$9.63</span></div>
          </div>
          <button className="finish-button">Finish</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

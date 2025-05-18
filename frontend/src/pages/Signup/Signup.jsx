import React from "react";
import FriendandChicken from '../../assets/images/Friend_and_chicken_slogan.jpg'; // Đường dẫn đến hình ảnh
import { Link } from "react-router-dom";
import './Signup.css';

function Signup() {
    return(  
            <div className="Signup-container">
                <div className="Signup-box">
                    <div className="Signup-image"> 
                        <img src ={FriendandChicken} alt="Friend and Chicken" />
                    </div>
                    <div className="Signup-form">
                        <h2>CREATE YOUR ACCOUNT</h2>
                        <form>
                            <input type="text" placeholder="First Name * " required />
                            <input type="text" placeholder="Last Name * " required />
                            <input type="text" placeholder="Phone Number * " required />
                            <input type="email" placeholder="Email * " required />
                            <div className="password-container">
                                <input type="password" placeholder="Password * " required />
                            </div>
                            <button type="submit" className="Create-button">Create My Account</button>
                        </form>
                        <div className ="Signin-text">
                            <p>Already have an account? <Link to="/Account">Sign In</Link></p>
                        </div>
                            
                    </div>
                </div>
            </div>);
    
}
export default Signup;
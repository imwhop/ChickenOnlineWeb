import React from 'react';
import './Account.css';
import { Link } from 'react-router-dom';
import FriendandChicken from '../../assets/images/Friend_and_chicken_slogan.jpg'; // Đường dẫn đến hình ảnh


function Account()
{
    return(
        <div className="account-container">
            <div className="account-box">
                <div className="account-image"> 
                    <img src ={FriendandChicken} alt="Friend and Chicken" />
                </div>
                <div className="account-form">
                    <h2>LOGIN</h2>
                    <form>
                        <input type="email" placeholder="Email * " required />
                        <div className="password-container">
                            <input type="password" placeholder="Password * " required />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    <div className="divider">Or continue with</div>
                    <button className="google-button">
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo" />
                        Sign in with Google
                    </button>
                    <div className ="signup-text">
                        <p>Haven't got an account? <Link to="/Signup">Sign up</Link></p>
                    </div>
                        
                </div>
            </div>
        </div>
    );
}
export default Account;
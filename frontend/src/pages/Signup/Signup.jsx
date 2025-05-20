import React, {useState} from "react";
import FriendandChicken from '../../assets/images/Friend_and_chicken_slogan.jpg'; // Đường dẫn đến hình ảnh
import { Link } from "react-router-dom";
import './Signup.css';
import axios from "axios";

function Signup() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", formData);
            alert("Tạo tài khoản thành công!");
            // TODO: điều hướng sang trang login nếu muốn
        } catch (error) {
            alert("Đăng ký thất bại: " + error.response?.data?.message);
        }
    };
    return(  
            <div className="Signup-container">
                <div className="Signup-box">
                    <div className="Signup-image"> 
                        <img src ={FriendandChicken} alt="Friend and Chicken" />
                    </div>
                    <div className="Signup-form">
                        <h2>CREATE YOUR ACCOUNT</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="First Name * " name="firstName" value={formData.firstName} onChange={handleChange} required />
                            <input type="text" placeholder="Last Name * " name="lastName" value={formData.lastName} onChange={handleChange} required />
                            <input type="text" placeholder="Phone Number * " name="phone" value={formData.phone} onChange={handleChange} required />
                            <input type="email" placeholder="Email * " name="email" value={formData.email} onChange={handleChange} required />
                            <div className="password-container">
                                <input type="password" placeholder="Password * " name="password" value={formData.password} onChange={handleChange} required />
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
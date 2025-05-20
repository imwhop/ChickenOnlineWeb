import React,{useState} from 'react';
import './Account.css';
import { Link } from 'react-router-dom';
import FriendandChicken from '../../assets/images/Friend_and_chicken_slogan.jpg'; // Đường dẫn đến hình ảnh
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Để điều hướng sau khi đăng nhập thành công

function Account()
{
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", formData);
            const token = res.data.token;
            localStorage.setItem('token', token);
            alert("Đăng nhập thành công!");
            // điều hướng sang trang chính (tuỳ bạn)
            navigate("/profile"); 
        } catch (err) {
            alert("Đăng nhập thất bại: " + err.response?.data?.message);
        }
    };
    return(
        <div className="account-container">
            <div className="account-box">
                <div className="account-image"> 
                    <img src ={FriendandChicken} alt="Friend and Chicken" />
                </div>
                <div className="account-form">
                    <h2>LOGIN</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email * " name="email" value={formData.email} onChange={handleChange} required />
                        <div className="password-container">
                            <input type="password" placeholder="Password * " name="password" value={formData.password} onChange={handleChange} required />
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
import React,{useState, useEffect} from 'react';
import './Account.css';
import { Link } from 'react-router-dom';
import FriendandChicken from '../../assets/images/Friend_and_chicken_slogan.jpg'; // Đường dẫn đến hình ảnh
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Để điều hướng sau khi đăng nhập thành công
import { isLoggedIn } from '../../utils/auth'; // Để kiểm tra trạng thái đăng nhập
import { auth, provider, signInWithPopup } from '../../firebase/config';

function Account()
{
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

      // 👉 Tự động chuyển sang profile nếu đã đăng nhập
    useEffect(() => {
        if (isLoggedIn()) {
        navigate('/profile');
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", formData);
            const token = res.data.token;
            const loginTime = new Date().getTime(); // timestamp hiện tại
            localStorage.setItem('token', token);
            localStorage.setItem('loginTime', loginTime); // lưu thời gian đăng nhập quá 30p dang nhap lai
            alert("Đăng nhập thành công!");
            // điều hướng sang trang chính (tuỳ bạn)
            navigate("/"); 
        } catch (err) {
            alert("Đăng nhập thất bại: " + err.response?.data?.message);
        }
    };

    const handleGoogleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Gửi dữ liệu lên backend để login hoặc tạo tài khoản mới
        const res = await axios.post("http://localhost:5000/api/auth/google-login", {
            email: user.email,
            name: user.displayName
        });

        const token = res.data.token;
        const loginTime = new Date().getTime();
        localStorage.setItem('token', token);
        localStorage.setItem('loginTime', loginTime);
        alert("Đăng nhập bằng Google thành công!");
        navigate('/profile');
    } catch (err) {
        console.error(err);
        alert("Đăng nhập Google thất bại!");
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
                    <button className="google-button" onClick={handleGoogleLogin}>
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
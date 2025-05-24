import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";
import {useNavigate} from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
        setFormData({
          firstName: res.data.FirstName,
          lastName: res.data.LastName,
          email: res.data.Email,
          phone: res.data.Phone,
        });
      } catch (err) {
        console.error("Lấy thông tin người dùng thất bại", err);
      }
    };
    fetchUser();
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put("http://localhost:5000/api/auth/me", formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Cập nhật thông tin thành công");
    } catch (err) {
      alert("Cập nhật thất bại: " + (err.response?.data?.error || err.message));
    }
  };
    const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loginTime");
    navigate("/account"); // chuyển về trang đăng nhập
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className = "container-profile">
      <h2>Account of: </h2>
      <div className="profile-form">
          <form onSubmit={handleSave}>
            <input name="firstName" value={formData.firstName} onChange={handleChange} />
            <input name="lastName" value={formData.lastName} onChange={handleChange} />
            <input name="email" value={formData.email} onChange={handleChange} />
            <input name="phone" value={formData.phone} onChange={handleChange} />
            <button type="submit">Save</button>
          </form>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Profile;

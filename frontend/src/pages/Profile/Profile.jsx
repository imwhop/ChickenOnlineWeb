import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
        setFormData({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          phone: res.data.phone,
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

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <form onSubmit={handleSave}>
        <input name="firstName" value={formData.firstName} onChange={handleChange} />
        <input name="lastName" value={formData.lastName} onChange={handleChange} />
        <input name="email" value={formData.email} onChange={handleChange} />
        <input name="phone" value={formData.phone} onChange={handleChange} />
        <button type="submit">Lưu</button>
      </form>
    </div>
  );
}

export default Profile;

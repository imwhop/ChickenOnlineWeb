import React, { useState, useEffect } from 'react';         //use effect : Hook để gọi API khi component load lần đầu
import Header from "../Components/header";
import './Customer.css';
import { getAllUsers, createUser, updateUser, deleteUser } from '../../../services/adminService';

function Customers() {
    const [users, setUsers] = useState([]);                 //danh sách users lấy từ api 
    const [selectedUser, setSelectedUser] = useState(null); //user được chọn để edit 
    const [formData, setFormData] = useState({              //dữ liệu form
        firstName: '',      
        lastName: '',
        email: '',
        phone: '',
        password: '',
        role: 'customer'
    });
    const [isEditing, setIsEditing] = useState(false);      //trạng thái edit/create

    // Load danh sách users khi component mount
    useEffect(() => {
        loadUsers();}, []);    // [] có nghĩa chỉ chạy 1 lần

    const loadUsers = async () => {
        try {
            const response = await getAllUsers();
            setUsers(response.data);
        } catch (error) {
            alert('Error loading users: ' + error.message);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {       
            if (isEditing) {            
                await updateUser(selectedUser.id, formData);
                alert('User updated successfully!');
            } else {
                await createUser(formData);
                alert('User created successfully!');
            }
            loadUsers();
            resetForm();
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setFormData({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone || '',
            password: '',
            role: user.role
        });
        setIsEditing(true);
    };

    const handleDelete = async (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await deleteUser(userId);
                alert('User deleted successfully!');
                loadUsers();
            } catch (error) {
                alert('Error deleting user: ' + error.message);
            }
        }
    };

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            role: 'customer'
        });
        setSelectedUser(null);
        setIsEditing(false);
    };

    return (
        <div>
            <Header />
            <div className="dashboard-content">
                <h2 style={{ fontSize: '50px', marginLeft: '30px' }}>
                    Welcome, <span style={{ color: 'red' }}>Admin!</span>
                </h2>
                <h3 style={{ fontSize: '30px', marginLeft: '30px' }}>
                    How are you doing?
                </h3>

                <div className='crudAccount-container'>
                    <h3 style={{fontSize:'20px', padding: '30px'}}>Customer list</h3>
                    <div className='account-panel'>
                        <div className='staffList'>
                            <h3>User Management</h3>
                            <div className='rectangle'></div>
                            <div className="user-list">
                                {users.map(user => (
                                    <div key={user.id} className="user-item">
                                        <span>{user.firstName} {user.lastName}</span>
                                        <div className="user-actions">
                                            <button onClick={() => handleEdit(user)}>Edit</button>
                                            <button onClick={() => handleDelete(user.id)}>Delete</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='crud-panel'>
                            <form onSubmit={handleSubmit}>
                                <h3>{isEditing ? 'Edit User' : 'Create New User'}</h3>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder={isEditing ? "New Password (leave blank to keep current)" : "Password"}
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required={!isEditing}
                                />
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                >
                                    <option value="customer">Customer</option>
                                    <option value="admin">Admin</option>
                                </select>
                                <div className="form-buttons">
                                    <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
                                    {isEditing && (
                                        <button type="button" onClick={resetForm}>Cancel</button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Customers; 

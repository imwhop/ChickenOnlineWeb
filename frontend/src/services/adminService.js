import axios from 'axios';

const API_URL = 'http://localhost:5000/api/admin';

// Lấy token từ localStorage
const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

// Lấy danh sách users
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`, getAuthHeader());
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Lấy thông tin chi tiết user
export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`, getAuthHeader());
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Tạo user mới
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData, getAuthHeader());
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Cập nhật user
export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${API_URL}/users/${userId}`, userData, getAuthHeader());
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Xóa user
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${userId}`, getAuthHeader());
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
}; 
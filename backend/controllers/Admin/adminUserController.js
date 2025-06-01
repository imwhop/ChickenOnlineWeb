const User = require('../../models/userModel'); 
const bcrypt = require('bcrypt');

class AdminUserController {
    
    // GET lấy tất cả user 
    static async getAllUsers(req, res) {
        try {
            const users = await User.findAll();
            
            // Loại bỏ password khỏi response
            const safeUsers = users.map(user => {
                const { password, ...safeUser } = user;  // xử lý nhiều user nên sử dụng map để xử lý trong array
                return safeUser;
            });
            
            res.json({
                success: true,
                data: safeUsers,
                total: safeUsers.length
            });
            
        } catch (error) {
            console.error('Error in getAllUsers:', error);
            res.status(500).json({
                success: false,
                message: 'cant load list of users'
            });
        }
    }

    // Get lấy thông tin chi tiết user 
    static async getUserById(req, res) {
        try {
            const UserId = req.params.id;    // lấy id của target user 
            const user = await User.findById(UserId);
            if (!user) { 
                return res.status(400).json({
                    success: false, 
                    message: "cant find user"
                }); 
            }
            const {password, ...safeUser} = user;  // xử lý 1 user 
            res.json({
                success: true,
                data: safeUser
            });
           
        } catch (error) {
            console.error('Error in getUserById:', error);
            res.status(500).json({
                success: false,
                message: 'Error: Loading user information'
            });
        }
    } 

    // POST tạo user mới
    static async createUser(req, res) {
        try {
            // lấy thông tin từ body 
            const {firstName, lastName, phone, email, password, role} = req.body;
            
            // validate 
            if (!firstName || !lastName || !email || !password) {
                return res.status(400).json({
                    success: false, 
                    message: 'Please fill your information'
                });
            } 

            const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
            if (!isValidEmail) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid email format'
                });
            }

            const existingEmail = await User.findByEmail(email);
            if (existingEmail) {
                return res.status(400).json({
                    success: false, 
                    message: 'Email already in use'
                });
            }

            // hash password
            const hashPassword = await bcrypt.hash(password, 10);
            
            // cập nhật thông tin vào biến tạo trong model 
            const userData = {
                firstName, 
                lastName,
                phone: phone || '',
                email,
                password: hashPassword,
                role: role || 'customer'
            }; 

            // trả thông tin đã loại bỏ password
            const newUser = await User.create(userData); 
            const {password: _, ...safeUser} = newUser;
            
            // res status thành công
            res.json({
                success: true, 
                message: 'New user created successfully',
                data: safeUser
            });

        } catch (error) {
            console.error('Error in createUser:', error);
            res.status(500).json({
                success: false,
                message: 'Error when creating new user'
            });
        }
    }

    // PUT: update user 
    static async updateUser(req, res) {
        try {
            // lấy thông tin 
            const userID = req.params.id; 
            const {firstName, lastName, phone, email, password, role} = req.body;
            
            // xác thực thông tin có khớp không 
            const existingUser = await User.findById(userID); 
            if (!existingUser) { 
                return res.status(404).json({
                    success: false, 
                    message: 'Error: Cant find user'
                });
            }

            // lấy thông tin mới 
            const userData = {
                firstName: firstName || existingUser.firstName,
                lastName: lastName || existingUser.lastName,
                phone: phone || existingUser.phone || '',
                email: email || existingUser.email,
                role: role || existingUser.role
            };

            // hash password nếu có cập nhật password
            if (password && password.trim() !== '') {
                userData.password = await bcrypt.hash(password, 10);
            } else {
                userData.password = existingUser.password;
            }

            // cập nhật thông tin mới 
            const updateUser = await User.update(userID, userData); 
            const {password: _, ...safeUser} = updateUser;
            
            // trả status thành công 
            res.json({
                success: true,
                message: 'Cập nhật user thành công',
                data: safeUser
            });

        } catch (error) {
            console.error('Error in updateUser:', error);
            res.status(500).json({
                success: false,
                message: 'Error: fail update user information'
            });
        }
    }
    
    // DELETE xóa user
    static async deleteUser(req, res) {
        try {            
            // lấy id      
            const userId = req.params.id; 
             
            // validate 
            const existingUser = await User.findById(userId);
            if (!existingUser) {
                return res.status(404).json({
                    success: false, 
                    message: 'Cant find user information'
                });
            }

            // không thể xóa chính mình
            if (userId == req.user.id) {
                return res.status(400).json({
                    success: false, 
                    message: 'You cannot delete your own admin account'
                });
            }

            // xóa 
            await User.delete(userId); 
            
            // gửi status
            res.json({
                success: true,
                message: 'Delete successful'
            });

        } catch (error) {
            console.error('Error in deleteUser:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi khi xóa user'
            });
        }
    }

    // GET dashboard thống kê
    static async getDashboard(req, res) {
        try {
            // Đếm tổng users
            const allUsers = await User.findAll();
            const totalUsers = allUsers.length;
            const adminCount = allUsers.filter(user => user.role === 'admin').length;
            const customerCount = allUsers.filter(user => user.role === 'customer').length;
            
            res.json({
                success: true,
                data: {
                    totalUsers,
                    adminCount,
                    customerCount,
                    currentAdmin: {
                        name: `${req.user.firstName} ${req.user.lastName}`,
                        email: req.user.email
                    }
                }
            });
            
        } catch (error) {
            console.error('Error in getDashboard:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi khi tải dashboard'
            });
        }
    }
}

module.exports = AdminUserController;
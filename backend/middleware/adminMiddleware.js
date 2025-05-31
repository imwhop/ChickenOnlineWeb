const User = require('../models/userModel');

// Middleware kiểm tra quyền admin
exports.verifyAdmin = async (req, res, next) => {
    try {
        // Lấy userId từ auth middleware (đã verify token)
        const userId = req.userId; 
        if (!userId) { 
            return res.status(401).json({ 
                error: "User is not authenticated"
            });
        } 

        // Lấy thông tin từ db 
        const user = await User.findById(userId); 
        if (!user) {
            return res.status(401).json({
                error: "User not found"
            }); 
        }

        // Check role admin
        if (user.role !== 'admin') {
            return res.status(403).json({ 
                error: "Access denied. Admin role required"
            });
        }

        // Lưu vào req cho controller sử dụng
        req.user = user;
        next();

    } catch (error) {
        console.error('Error in admin middleware:', error);
        return res.status(500).json({ 
            error: "Server error in authorization" 
        });
    } 
}
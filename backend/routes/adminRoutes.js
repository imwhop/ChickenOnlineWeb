const express = require("express");
const router = express.Router();

// Import middlewares
const { verifyToken } = require('../middleware/authMiddleware');
const { verifyAdmin } = require('../middleware/adminMiddleware');

// Import controllers
const AdminFoodController = require('../controllers/Admin/adminFoodController'); 
const AdminUserController = require('../controllers/Admin/adminUserController');

// =================================
// FOOD ROUTES 
// =================================


router.get('/foods', verifyToken, verifyAdmin, AdminFoodController.getAllFood);
router.get('/foods/:id', verifyToken, verifyAdmin, AdminFoodController.getFoodById);
router.post('/foods', verifyToken, verifyAdmin, AdminFoodController.createProdcut);
router.put('/foods/:id', verifyToken, verifyAdmin, AdminFoodController.updateProduct);
router.delete('/foods/:id', verifyToken, verifyAdmin, AdminFoodController.deleteProduct);


// =================================
// USER ROUTES
// =================================
router.get('/users', verifyToken, verifyAdmin, AdminUserController.getAllUsers);
router.get('/users/:id', verifyToken, verifyAdmin, AdminUserController.getUserById);
router.post('/users', verifyToken, verifyAdmin, AdminUserController.createUser);
router.put('/users/:id', verifyToken, verifyAdmin, AdminUserController.updateUser);
router.delete('/users/:id', verifyToken, verifyAdmin, AdminUserController.deleteUser);

// =================================
// DASHBOARD
// =================================

router.get('/dashboard', verifyToken, verifyAdmin, AdminUserController.getDashboard);

module.exports = router;
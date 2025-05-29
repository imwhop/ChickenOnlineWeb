const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getMe,
  updateMe,
  googleLogin, // <-- Thêm hàm Google Login
} = require("../controllers/authController");
const { verifyToken } = require("../middleware/authMiddleware");

// Auth routes
router.post("/register", register);
router.post("/login", login);
router.post("/google-login", googleLogin); // <-- Thêm route này

// Protected routes
router.get("/me", verifyToken, getMe);
router.put("/me", verifyToken, updateMe);

module.exports = router;

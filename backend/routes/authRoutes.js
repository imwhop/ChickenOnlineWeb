const express = require("express");
const router = express.Router();
const { register, login,getMe , updateMe } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

module.exports = router;

const { verifyToken } = require("../middleware/authMiddleware");

router.get("/me", verifyToken, getMe);
router.put("/me", verifyToken, updateMe);

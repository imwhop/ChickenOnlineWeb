const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { pool } = require("../models/db");

// ĐĂNG KÝ
exports.register = async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const conn = await pool.connect();

    await conn.request()
      .input("firstName", firstName)
      .input("lastName", lastName)
      .input("email", email)
      .input("phone", phone)
      .input("password", hashedPassword)
      .query(`
        INSERT INTO Users (firstName, lastName, email, phone, password)
        VALUES (@firstName, @lastName, @email, @phone, @password)
      `);

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ĐĂNG NHẬP
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const conn = await pool.connect();
    const result = await conn.request()
      .input("email", email)
      .query("SELECT * FROM Users WHERE email = @email");

    const user = result.recordset[0];

    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LẤY THÔNG TIN USER ĐÃ ĐĂNG NHẬP
exports.getMe = async (req, res) => {
  try {
    const conn = await pool.connect();
    const result = await conn.request()
      .input("id", req.userId)
      .query("SELECT firstName, lastName, email, phone FROM Users WHERE id = @id");
    const user = result.recordset[0];
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CẬP NHẬT THÔNG TIN USER
exports.updateMe = async (req, res) => {
  const { firstName, lastName, email, phone } = req.body;
  try {
    const conn = await pool.connect();
    await conn.request()
      .input("id", req.userId)
      .input("firstName", firstName)
      .input("lastName", lastName)
      .input("email", email)
      .input("phone", phone)
      .query(`
        UPDATE Users
        SET firstName = @firstName, lastName = @lastName, email = @email, phone = @phone
        WHERE id = @id
      `);
    res.json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


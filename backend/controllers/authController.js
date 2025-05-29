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
      .input("passwordHash", hashedPassword)
      .query(`
        INSERT INTO Customers (FirstName, LastName, Email, Phone, PasswordHash)
        VALUES (@firstName, @lastName, @email, @phone, @passwordHash)
      `);

    res.status(201).json({ message: "Customer registered successfully" });
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
      .query("SELECT * FROM Customers WHERE Email = @email");

    const customer = result.recordset[0];

    if (!customer) return res.status(401).json({ error: "Invalid credentials" });

    const valid = await bcrypt.compare(password, customer.PasswordHash);
    if (!valid) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: customer.CustomerID, email: customer.Email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "1800s" });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LẤY THÔNG TIN CUSTOMER ĐÃ ĐĂNG NHẬP
exports.getMe = async (req, res) => {
  try {
    const conn = await pool.connect();
    const result = await conn.request()
      .input("id", req.userId)
      .query("SELECT FirstName, LastName, Email, Phone FROM Customers WHERE CustomerID = @id");
    const customer = result.recordset[0];
    if (!customer) return res.status(404).json({ error: "Customer not found" });
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CẬP NHẬT THÔNG TIN CUSTOMER
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
        UPDATE Customers
        SET FirstName = @firstName, LastName = @lastName, Email = @email, Phone = @phone
        WHERE CustomerID = @id
      `);
    res.json({ message: "Customer updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// ĐĂNG NHẬP BẰNG GOOGLE
exports.googleLogin = async (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: "Email and name are required" });
  }

  try {
    const conn = await pool.connect();

    // Kiểm tra xem người dùng đã tồn tại chưa
    const result = await conn.request()
      .input("email", email)
      .query("SELECT * FROM Customers WHERE Email = @email");

    let customer = result.recordset[0];

    // Nếu chưa tồn tại thì tạo mới
    if (!customer) {
      const [firstName, ...lastNameParts] = name.split(" ");
      const lastName = lastNameParts.join(" ") || ""; // Tránh lỗi tên chỉ có 1 từ

      const insertResult = await conn.request()
        .input("firstName", firstName)
        .input("lastName", lastName)
        .input("email", email)
        .input("phone", "") // Có thể cập nhật sau
        .input("passwordHash", "") // Vì không có mật khẩu
        .query(`
          INSERT INTO Customers (FirstName, LastName, Email, Phone, PasswordHash)
          OUTPUT INSERTED.*
          VALUES (@firstName, @lastName, @email, @phone, @passwordHash)
        `);

      customer = insertResult.recordset[0];
    }

    // Tạo token
    const token = jwt.sign(
      { id: customer.CustomerID, email: customer.Email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1800s" }
    );

    res.json({ token });
  } catch (err) {
    console.error("Google login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

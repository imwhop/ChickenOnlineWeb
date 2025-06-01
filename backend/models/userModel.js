const { pool } = require('./db'); 

class User {
    constructor(data) {
        this.id = data.CustomerID; 
        this.firstName = data.FirstName; 
        this.lastName = data.LastName;
        this.phone = data.Phone;
        this.email = data.Email;
        this.password = data.PasswordHash;
        this.role = data.Role;
        this.createAt = data.CreatedAt;
    }

    static async findAll() {
        try { 
            const conn = await pool.connect();
            const result = await conn.request()
                .query(`SELECT * FROM Customers ORDER BY CreatedAt DESC`); 
            
            return result.recordset.map(row => new User(row));
        } catch (error) {
            throw new Error(`Error fetching user: ${error.message}`);
        }
    }

    static async findById(id) {
        try {
            const conn = await pool.connect();
            const result = await conn.request()
                .input('id', id)
                .query('SELECT * FROM Customers WHERE CustomerID = @id');
            
            if (result.recordset.length === 0) {
                return null;
            }
            return new User(result.recordset[0]);
        } catch (error) {
            throw new Error(`Error fetching User: ${error.message}`);
        }
    }

    static async findByEmail(email) {
        try {
            const conn = await pool.connect();
            const result = await conn.request()
                .input('email', email)
                .query('SELECT * FROM Customers WHERE Email = @email');
            
            if (result.recordset.length === 0) return null;
            return new User(result.recordset[0]);
        } catch (error) {
            throw new Error(`Error finding user by email: ${error.message}`);
        }
    }

    static async create(userData) {
        try {
            const conn = await pool.connect();
            const result = await conn.request()
                .input('firstName', userData.firstName)
                .input('lastName', userData.lastName)
                .input('phone', userData.phone)
                .input('email', userData.email)
                .input('password', userData.password)
                .input('role', userData.role)
                .query(`
                    INSERT INTO Customers (FirstName, LastName, Phone, Email, PasswordHash, Role)
                    OUTPUT INSERTED.*
                    VALUES (@firstName, @lastName, @phone, @email, @password, @role)
                `);
            
            return new User(result.recordset[0]);
        } catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }

    static async update(id, userData) {
        try {
            const conn = await pool.connect();
            await conn.request()
                .input('id', id)
                .input('firstName', userData.firstName)
                .input('lastName', userData.lastName)
                .input('phone', userData.phone)
                .input('email', userData.email)
                .input('password', userData.password)
                .input('role', userData.role)
                .query(`
                    UPDATE Customers 
                    SET FirstName = @firstName, LastName = @lastName, Phone = @phone, 
                        Email = @email, PasswordHash = @password, Role = @role
                    WHERE CustomerID = @id
                `);
            
            return await User.findById(id);
        } catch (error) {
            throw new Error(`Error updating user: ${error.message}`);
        }
    }

    static async delete(id) {
        try {
            const conn = await pool.connect();
            await conn.request()
                .input('id', id)
                .query('DELETE FROM Customers WHERE CustomerID = @id'); // Hard delete thay vì soft delete
            
            return true;
        } catch (error) {
            throw new Error(`Error deleting user: ${error.message}`);
        }
    }
}

module.exports = User;
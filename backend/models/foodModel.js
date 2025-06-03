const { pool } = require('./db');

class Food {
    constructor(data) {
        this.id = data.ProductID;
        this.name = data.Name;
        this.description = data.Description;
        this.price = data.Price;
        this.quantity = data.StockQuantity;
        this.isAvailable = data.IsAvailable;
        this.rating = data.rating;
        this.createdAt = data.CreatedAt;
    }

    static async findAll() {
        try {
            const conn = await pool.connect();
            const result = await conn.request()
                .query(`
                    SELECT * FROM Products 
                    WHERE IsAvailable = 1 
                    ORDER BY CreatedAt DESC
                `);

            return result.recordset.map(row => new Food(row));
        } catch (error) {
            throw new Error(`Error fetching food: ${error.message}`);
        }
    }

    static async findById(id) {
        try {
            const conn = await pool.connect();
            const result = await conn.request()
                .input('id', id)
                .query(`SELECT * FROM Products WHERE ProductID = @id`);

            if (result.recordset.length === 0) return null;
            return new Food(result.recordset[0]);
        } catch (error) {
            throw new Error(`Error fetching food: ${error.message}`);
        }
    }
    
    static async findByName(name) {
        try {
            const conn = await pool.connect();
            const result = await conn.request()
                .input('Name', name) 
                .query(`SELECT * FROM Products WHERE Name = @Name`);

            if (result.recordset.length === 0) return null;
            return new Food(result.recordset[0]);
        } catch (error) {
            throw new Error(`Error fetching food by name: ${error.message}`);
        }
    }

    static async create(foodData) {
        try {
            const conn = await pool.connect();
            const result = await conn.request()
                .input('name', foodData.name)
                .input('description', foodData.description)
                .input('price', foodData.price)
                .input('quantity', foodData.quantity || 0)
                .input('isAvailable', foodData.isAvailable ?? 1)
                .query(`
                    INSERT INTO Products (Name, Description, Price, StockQuantity, IsAvailable)
                    OUTPUT INSERTED.*
                    VALUES (@name, @description, @price, @quantity, @isAvailable)
                `);

            return new Food(result.recordset[0]);
        } catch (error) {
            throw new Error(`Error creating food: ${error.message}`);
        }
    }

    static async update(id, foodData) {
        try {
            const conn = await pool.connect();
            await conn.request()
                .input('id', id)
                .input('name', foodData.name)
                .input('description', foodData.description)
                .input('price', foodData.price)
                .input('quantity', foodData.quantity)
                .input('isAvailable', foodData.isAvailable)
                .query(`
                    UPDATE Products 
                    SET Name = @name, Description = @description, Price = @price,
                        StockQuantity = @quantity, IsAvailable = @isAvailable
                    WHERE ProductID = @id
                `);

            return await Food.findById(id);
        } catch (error) {
            throw new Error(`Error updating food: ${error.message}`);
        }
    }

    static async delete(id) {
        try {
            const conn = await pool.connect();
            await conn.request()
                .input('id', id)
                .query(`UPDATE Products SET IsAvailable = 0 WHERE ProductID = @id`);
            return true;
        } catch (error) {
            throw new Error(`Error deleting food: ${error.message}`);
        }
    }
}

module.exports = Food;

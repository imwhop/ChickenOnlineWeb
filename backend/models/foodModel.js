const { data } = require('./db');
class Food 
{ 
    constructor (data) 
    { 
        this.id= data.ProductID;
        this.name = data.Name;
        this.description= data.Description;
        this.price = data.Price;
        this.quantity = data.StockQuantity;
        this.image = data.ImageURL;
        this.isAvailable= data.IsAvailable;
        this.rating = data.rating;
        this.createdAt = data.CreatedAt;
    }

    static async findAll () 
    { 
        try 
        { 
            const query = `
            SELECT * FROM Products
            WHERE IsAvailable = 1 
            ORDER BY CreatedAt DESC` ; 
            const result = await db.query(query); 

            return result.map (row => new Food(row));
            

        }
        catch (error)
        { 
            throw new Error(`Error fetching food: ${error.message}`);
        }
    }
    
    //tìm theo id 
    static async findById(id) 
    { 
       try{ 
            const query = ` 
            SELECT * FROM Products 
            Where ProductID = ?`; 
            const result = await db.query (query, [id]); 
            if(result.length === 0) { 
                return null ; 
            }
            return new Food(result[0]);

       }catch(error)
       { 
        throw new Error(`Error fetching food: ${error.message}`);
       }
    }

    //tạo món mới
    static async create (FoodData)
    { 
        try 
        { 
            const query = `
            INSERT INTO Products (Name, Description, Price, StockQuantity, ImageURL, IsAvailable)
            VALUES(?,?,?,?,?,?)`;
            const values = [ 
                FoodData.name, 
                FoodData.description, 
                FoodData.price, 
                FoodData.quantity || 0, 
                FoodData.image || null, 
                FoodData.isAvailable || 1, 
                             
            ];
            const result = await db.query(query,values); 
            //trả về product vừa tạo
            return await Food.findById(result.insertId);
        }
        catch (error)
        { 
            throw new Error (`Error creating food: ${error.message}`)
        }
    }

    //Update món mới
    static async update (id, FoodData)
    { 
     try{ 
        const query = `
        UPDATE Products 
        SET Name = ?, Description = ? , Price = ? , StockQuantity = ? , ImageURL= ? , IsAvailable=? 
        Where ProductID = ? `
        const values = [ 
                FoodData.name, 
                FoodData.description, 
                FoodData.price, 
                FoodData.quantity, 
                FoodData.image, 
                FoodData.isAvailable, 
                id
                             
            ];       
        await db.query(query, values);
        return await Food.findById(id); 

        }catch(error)
        {
            throw new Error (`Error updating food: ${error.message}`);
        }
    }

        //soft delete
     static async delete(id) {
        try {
            const query = `UPDATE Products SET IsAvailable = 0 WHERE ProductID = ?`;
            await db.query(query, [id]);
            return true;
        } catch (error) {
            throw new Error(`Error deleting food: ${error.message}`);
        }
    }
    
}
module.exports = Food;

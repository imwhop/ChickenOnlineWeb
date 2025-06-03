const Food = require ('../../models/foodModel');

class AdminFoodController 
{ 
    //GET lấy thông tin tất cả món 
    static async getAllFood (req, res )
    { 
       try
       { 
          const foods =await Food.findAll();
            res.json ({ 
                success: true,          
                message: "Get all food successfully",
                data: foods
            });
       }catch(error)
       { 
            res.status(500).json({
                success: false,
                message: "Failed to get food list",
                error: error.message
            });
       }
    }
    //GET lấy thông tin món theo id 
   static async getFoodById(req, res) {
    try {
        const foodId = req.params.id;
        const food = await Food.findById(foodId);
        if (!food) {
            return res.status(404).json({
                success: false,
                message: 'Food not found'
            });
        }
        res.json({
            success: true,
            message: 'Get the food successfully',
            data: food
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching food',
            error: error.message
        });
    }
}
    //POST tạo food mới  
    static async createProdcut(req, res)
    { 
        try
        { 
            const {name, description, price, quantity, isAvailable, rating} = req.body;
            if(!name || !description || !price || !quantity)
            { 
                return res.status(400).json ({ 
                    success: false, 
                    message: "please fill food information"
                });
            }
            const existingProduct = await Food.findByName(name);
            if(existingProduct) 
            { 
                return res.status(400).json({
                    success: false, 
                    message: 'Product already exists'
                });
            }
            const foodData = 
            { 
                name,
                description,
                price,
                quantity,
                isAvailable: isAvailable || '1',
                rating: rating || ''
            }
            const newProduct = await Food.create(foodData);
            res.json ({
                success: true, 
                message: 'add new product successfully', 
                data: newProduct
            });
        } catch (error){ 
            console.error('Error in createProduct:', error);
            res.status(500).json({
                success: false,
                message: 'Error when creating new product'
            });
        }
    }   
    //PUT update food
    static async updateProduct (req, res)
    { 
        try
        { 
            const {name, description, price, quantity, isAvailable, rating} = req.body;
            const foodId = req.params.id; 
            
            const existingProduct = await Food.findById(foodId);
            if(!existingProduct)
            { 
                return res.status(404).json({
                    success: false, 
                    message: 'Error: Product not found'
                });
            }

            const foodData = 
            { 
                name: name || existingProduct.name,
                description,
                price,
                quantity,
                isAvailable: isAvailable ?? 1,
                rating: rating ?? 0
            } 

            const updateProduct = await Food.update(foodId, foodData); 
            
            res.json({
                success: true, 
                message: 'Update Product successfully', 
                data: updateProduct
            });
        }
        catch (error)
        { 
            console.error('Error in updateProduct:', error);
            res.status(500).json({
                success: false,
                message: 'Error: fail update product information'
            });
        }
    }

    //DELETE xóa food 
    static async deleteProduct(req, res) {
        try {            
            const foodId = req.params.id; 
             
            const existingProduct = await Food.findById(foodId);
            if (!existingProduct) {
                return res.status(404).json({
                    success: false, 
                    message: 'Cant find product information'
                });
            }

            await Food.delete(foodId); 
            
            res.json({
                success: true,
                message: 'Delete successful'
            });

        } catch (error) {
            console.error('Error in deleteProduct:', error);
            res.status(500).json({
                success: false,
                message: 'Error: when try to delete product'
            });
        }
    }


}
module.exports = AdminFoodController; 
const Category = require('../models/category')

module.exports = {
    create(req,res){
        const category = req.body 
        Category.create(category, (err, id) =>{
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error creating category',
                    error: err
                })
            }
            return res.status(201).json({
                success: true,
                message: 'Category created',
                data: `${id}`
            })
        })
    }
}
const Order = require('../models/order')
const OrderHasProducts = require('../models/order_has_products')

module.exports = {
    
    create(req,res){
        const order = req.body 

        Order.create(order, async (err, id) =>{
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error creating order',
                    error: err
                })
            }
            for(const product of order.products){
                await OrderHasProducts.create(id,product.idProductos, product.quantity, (err, aidi) =>{
                    if(err){
                        return res.status(501).json({
                            success: false,
                            message: 'Error creating order in products',
                            error: err
                        })
                    }
                })
            }
            return res.status(201).json({
                success: true,
                message: 'Order created successfully ',
                data: `${id}`
            })
        })
    }
}
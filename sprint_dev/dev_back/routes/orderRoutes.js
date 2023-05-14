const ordersController = require('../controllers/ordersController')

module.exports = (app) =>{
    app.post('/api/orders/create', ordersController.create)
}
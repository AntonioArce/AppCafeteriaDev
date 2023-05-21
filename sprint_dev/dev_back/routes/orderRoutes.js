const ordersController = require('../controllers/ordersController')

module.exports = (app) =>{
    app.post('/api/orders/create', ordersController.create)
    app.get('/api/orders/findByStatus/:status', ordersController.findByStatus)
    app.put('/api/orders/updateToPrepare', ordersController.updateToPrepare)
    app.put('/api/orders/updateToFine', ordersController.updateToFine)
    app.put('/api/orders/updateToDelivered', ordersController.updateToDelivery)
}
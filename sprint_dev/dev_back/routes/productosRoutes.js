const productosController = require('../controllers/productosController')
module.exports = (app, upload) =>{
    app.get('/api/products/findByCategory/:idTipo_Producto', productosController.findByCategory  )
    app.post('/api/products/createWithImage', upload.array('image', 1), productosController.create)
}
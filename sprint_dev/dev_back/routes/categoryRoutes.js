const categoriesController = require('../controllers/categoriesController')
module.exports = (app) =>{
    app.post('/api/categories/create', categoriesController.create)
}
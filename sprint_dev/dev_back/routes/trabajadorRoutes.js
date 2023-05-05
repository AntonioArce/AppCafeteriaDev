const trabajadorController = require('../controllers/trabajadorController')

module.exports = (app) =>{
    app.get('/api/employee/getAll', trabajadorController.getAll)
    app.post('/api/employee/create', trabajadorController.create)
    /* app.put('/api/trabajadores/:id', trabajadorController.actualizarTrabajador)
    app.delete('/api/trabajadores/:id', trabajadorController.eliminarTrabajador) */
}
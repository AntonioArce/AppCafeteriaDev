import express  from 'express'
import { verificar } from '../../controllers/login/authToken-controller.js'
import { postTrabajadores, getTrabajadores, getTrabajador, patchTrabajador, deleteTrabajador } from '../../controllers/admin/admin-trabajador-controllers.js'
const routerAdminTrabajadores = express.Router()

routerAdminTrabajadores.use(express.json())


routerAdminTrabajadores.get('/trabajadores',verificar, getTrabajadores)
routerAdminTrabajadores.post('/trabajadores', verificar, postTrabajadores)
routerAdminTrabajadores.get('/trabajadores/:id_correo', verificar, getTrabajador)
routerAdminTrabajadores.patch('/trabajadores/:id_correo', verificar, patchTrabajador)
routerAdminTrabajadores.delete('/trabajadores/:id_correo', verificar, deleteTrabajador)

export default routerAdminTrabajadores
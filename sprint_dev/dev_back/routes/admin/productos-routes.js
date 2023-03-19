import express  from 'express'
import { verificar } from '../../controllers/login/authToken-controller.js'
import  {getProductos, postProductos } from '../../controllers/admin/admin-productos-controller.js'

const routerAdminProductos = express.Router()
routerAdminProductos.use(express.json())

routerAdminProductos.get('/productos', verificar,getProductos)
routerAdminProductos.post('/productos', verificar, postProductos)

export default routerAdminProductos
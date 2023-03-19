import express  from 'express'
import { verificar } from '../../controllers/login/authToken-controller.js'
import {getProductos, patchProductosStock, postProductos, patchProductos, deleteProductos} from '../../controllers/admin/admin-productos-controller.js'

const routerAdminProductos = express.Router()
routerAdminProductos.use(express.json())

routerAdminProductos.get('/productos', verificar,getProductos)
routerAdminProductos.post('/productos', verificar, postProductos)
routerAdminProductos.patch('/productos/stock/:id', verificar, patchProductosStock)
routerAdminProductos.patch('/productos/:id', verificar, patchProductos)
routerAdminProductos.delete('/productos/:id',verificar, deleteProductos)

export default routerAdminProductos
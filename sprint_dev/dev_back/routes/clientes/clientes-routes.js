import express from 'express'
import cors  from 'cors'
import { getClientes, postClientes, getCliente, putCliente } from '../../controllers/clientes/clientes-controller.js'
import { verificar } from '../../controllers/login/authToken-controller.js'
const routerClientes = express.Router()

//Middlewere
routerClientes.use(express.json())


routerClientes.get('/',verificar, getClientes)
routerClientes.get('/:id_correo', cors(), getCliente)
routerClientes.post('/', postClientes)
routerClientes.put('/:id_correo', putCliente)

export default routerClientes
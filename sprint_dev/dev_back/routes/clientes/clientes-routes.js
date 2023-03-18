import express from 'express'
import { getClientes, postClientes, getCliente } from '../../controllers/clientes/clientes-controller.js'
const routerClientes = express.Router()

//Middlewere
routerClientes.use(express.json())


routerClientes.get('/', getClientes)
routerClientes.get('/:id_correo', getCliente)
routerClientes.post('/', postClientes)

export default routerClientes
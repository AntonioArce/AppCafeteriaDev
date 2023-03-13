import express from 'express'
import { getClientes, postClientes } from '../../controllers/clientes-controller.js'
const routerClientes = express.Router()

//Middlewere
routerClientes.use(express.json())


routerClientes.get('/', getClientes)
routerClientes.post('/', postClientes)

export default routerClientes
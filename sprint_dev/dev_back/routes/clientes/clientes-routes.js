import express from 'express'
import { getClientes } from '../../controlers/clientes-controler.js'
const routerClientes = express.Router()

//Middlewere
routerClientes.use(express.json())


routerClientes.get('/', getClientes)

export default routerClientes
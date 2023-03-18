import express from 'express'
const routerauthToken = express.Router()
import { createToken } from '../../controllers/login/authToken-controller.js' 

//Middlewere
routerauthToken.use(express.json())

routerauthToken.post('/login', createToken)



export default routerauthToken
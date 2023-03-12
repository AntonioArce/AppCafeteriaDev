import express from 'express'
/* const connection = require('../../database/database.js') */
import connection from '../../database/database.js'
const routerUsuarios = express.Router()

routerUsuarios.get('/prueba', (req,res) => {
    res.send(JSON.stringify('Rutas de usuario'))
})

//Middlewere
routerUsuarios.use(express.json())

routerUsuarios.get('/', (req,res) => {
    connection.connect(function(error){
        if(error){
            throw error
        }
        else{
            connection.query('SELECT * FROM rol', function(error,results, fields){
                
            })
        }
    })
    connection.end()
    res.send('SI')
})

export default routerUsuarios
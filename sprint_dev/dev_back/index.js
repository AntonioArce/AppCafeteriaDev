import express from 'express'
const app = express() 

const PUERTO = process.env.PORT || 8000

//Routes
/* const routerUsuarios = require('./routes/usuarios/usuarios.js') */
import routerUsuarios from './routes/usuarios/usuarios.js'
app.use('/api/v1/usuarios',routerUsuarios)


//Routing
app.get('/', (req, res) => {
    res.send('Aplicacion servidor para Trabajo Terminal II')
})



app.listen(PUERTO, () => {
    console.log('Servidor iniciado en el puerto ' + PUERTO)
})
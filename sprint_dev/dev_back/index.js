import express from 'express'
const app = express() 
const PUERTO = process.env.PORT || 8000

app.use(express.json())

//Routes
import routerClientes from './routes/clientes/clientes-routes.js'
app.use('/api/v1/clientes',routerClientes)


//Routing
app.get('/', (req, res) => {
    res.send('Aplicacion servidor para Trabajo Terminal II')
})

app.listen(PUERTO, () => {
    console.log('Servidor iniciado en el puerto ' + PUERTO)
})
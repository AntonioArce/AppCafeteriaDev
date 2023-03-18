import express from 'express'
//Import Routes
import routerClientes from './routes/clientes/clientes-routes.js'
import routerauthToken from './routes/login/authToken-routes.js'

const app = express() 
const PUERTO = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api/v1/clientes',routerClientes)
app.use('/api/v1/auth', routerauthToken)


//Routing
app.get('/', (req, res) => {
    res.send('Aplicacion servidor para Trabajo Terminal II')
})

app.listen(PUERTO, () => {
    console.log('Servidor iniciado en el puerto ' + PUERTO)
})
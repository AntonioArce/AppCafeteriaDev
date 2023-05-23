const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const logger = require('morgan')
const cors = require('cors')
const multer = require('multer')

const port = process.env.PORT || 3000

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(cors())
app.disable('x-powered-by')
app.set('port', port)

const upload = multer({
    storage: multer.memoryStorage()
})


server.listen(3000, '192.168.1.9' || 'localhost', function(){
    console.log('Server running at http://192.168.1.17:' + port)
})

// Importar Rutas
const usersRoutes = require('./routes/userRoutes')
const categoriesRoutes = require('./routes/categoryRoutes')
const trabajadoresRoutes = require('./routes/trabajadorRoutes')
const productsRoutes = require('./routes/productosRoutes')
const orderRoutes = require('./routes/orderRoutes')

// Llamado a las rutas
usersRoutes(app)
categoriesRoutes(app)
trabajadoresRoutes(app)
productsRoutes(app, upload)
orderRoutes(app)

app.get('/', (req,res) =>{
    res.send('Ruta raiz de la Aplicacion')
})

app.get('/test', (req,res) =>{
    res.send('Ruta test')
})

// ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.stack ||  500).send(err.stack)
})
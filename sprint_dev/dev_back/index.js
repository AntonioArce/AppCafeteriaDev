import express from 'express'

const app = express() 

app.get('/empleados',(req,res) => res.send('Obteniendo Empleados'))
app.listen(8000)

console.log('Server en el puerto 8000')
import { pool } from '../../database/database.js'
import  jwt  from 'jsonwebtoken'

export const getProductos = async (req,res) =>{
    jwt.verify(req.token, 'secretkey', (err,authData) => {
        if(err){
            console.log(err)
            res.sendStatus(403)
        }/* 
        else{
            /* res.json({
                mensaje: "SI",
                authData
            }) */
    })
}

export const postProductos = async (req,res) =>{
    jwt.verify(req.token, 'secretkey', (err,authData) => {
        if(err){
            console.log(err)
            res.sendStatus(403)
        }/* 
        else{
            /* res.json({
                mensaje: "SI",
                authData
            }) */
    })
    const {nombre,descripcion,stock,precio,tipo} = req.body
    const [rows] =  await pool.query('call registrarProducto(?,?,?,?,?)',[nombre,descripcion,stock,precio,tipo])
    if(rows.affectedRows == 1)
        res.status(200).json('Producto registrado con exito!')

}
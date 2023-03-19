import { pool } from '../../database/database.js'
import  jwt  from 'jsonwebtoken'

export const getProductos = async (req,res) =>{
    jwt.verify(req.token, 'secretkey', (err,authData) => {
        if(err)
            res.sendStatus(403)
    })
    const [[rows]]  = await pool.query('call consultarProducto()')
    res.status(200).json(rows)
}

export const postProductos = async (req,res) =>{
    jwt.verify(req.token, 'secretkey', (err,authData) => {
        if(err)
            res.sendStatus(403)
    })
    const {nombre,descripcion,stock,precio,tipo} = req.body
    const [rows] =  await pool.query('call registrarProducto(?,?,?,?,?)',[nombre,descripcion,stock,precio,tipo])
    if(rows.affectedRows == 1)
        res.status(200).json('Producto registrado con exito!')

}

export const patchProductosStock = async (req,res) =>{
    jwt.verify(req.token, 'secretkey', (err,authData) => {
        if(err)
            res.sendStatus(403)
    })
    const rows = await pool.query('update productos set stock = ? where idProductos = ?', [req.body.stock, req.params.id])
    res.status(200).json('Stock de Producto modificado con exito')
}

export const patchProductos = async (req,res) =>{
    jwt.verify(req.token, 'secretkey', (err,authData) => {
        if(err)
            res.sendStatus(403)
    })

    
    if(req.body.nombre){
        const rows = await pool.query('update productos set nombre = ? where idProductos = ?', [req.body.nombre, req.params.id])
        res.status(200).json('Nombre del producto modificado con exito')
    }
    else if(req.body.descripcion){
        const rows = await pool.query('update productos set descripcion = ? where idProductos = ?', [req.body.descripcion, req.params.id])
        res.status(200).json('Descripcion modificada con exito')
    }
    else if(req.body.precio){
        const rows = await pool.query('update productos set precio = ? where idProductos = ?', [req.body.precio, req.params.id])
        res.status(200).json('Precio del producto modificado con exito')
    }
}

export const deleteProductos = async(req,res) =>{
    jwt.verify(req.token, 'secretkey', (err,authData) => {
        if(err)
            res.sendStatus(403)
    })

    await pool.query('update productos set is_active = 0 where idProductos = ?', req.params.id)
    res.status(200).json('Producto Eliminado con exito')
}
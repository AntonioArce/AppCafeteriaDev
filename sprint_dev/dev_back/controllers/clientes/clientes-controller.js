import { pool } from '../../database/database.js'
import jwt from  'jsonwebtoken'
import bcrypt from 'bcryptjs' 

export const getClientes = async (req,res) => {
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

    const [[rows]] = await pool.query('call consultarClientes(1,0)')
    res.json(rows)
}

export const getCliente = async (req, res) => {
    let correo = req.params.id_correo
    const [[rows]] = await pool.query('call consultarClientes(2,?)', correo)
    if(rows.length == 0){
        res.status(200).json('Este usuario no existe en la base de datos')
    }
    else{
        res.status(200).json(rows)
    }
} 

export const postClientes = async (req,res) =>{
    const {nombre, paterno, materno, telefono, correo, contrasena} = req.body
    let [confirmacionEmail] = await pool.query('select correo from usuario where correo like ?',correo)

    if(confirmacionEmail.length != 0){
        res.status(200).json('Este correo ya esta registrado')
    }
    else{
       const [rows] = await pool.query('call registrarCliente(?,?,?,?,?,?,2)', [nombre, paterno, materno, telefono,correo,contrasena])
       res.status(200).json("Usuario registrado con exito!!!!!!!")
    }
}


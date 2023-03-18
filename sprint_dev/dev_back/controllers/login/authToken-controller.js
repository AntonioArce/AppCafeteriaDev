import { pool } from '../../database/database.js'
import jwt from 'jsonwebtoken'
import { text } from 'express'

export const createToken = async (req, res) =>{
    let user = req.body.user
    let pass = req.body.pass
    let [confirmacionEmail] = await pool.query('select correo from usuario where correo like ?',user)
    let [confirmacionContra] = await pool.query('select contrasena from usuario where contrasena = sha2(?,256)', pass)
    if(confirmacionEmail.length == 0 )
        res.status(403).send({message: 'No se encontro usuario registrado con este correo'})
    if(confirmacionContra.length == 0)
        res.status(403).send({message: 'La contraseña es incorrecta'})
    else{
        jwt.sign({usuario: user}, 'secretkey', (err,token) =>{
            res.status(200).json({
                token: token
            })
        }) 
    }
}

export const verificar = (req,res) =>{

}
import { pool } from '../../database/database.js'
import  jwt  from 'jsonwebtoken'
import { json } from 'express'

export const postTrabajadores = async (req,res) =>{
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

    const {nombre, paterno, materno, telefono, correo, contrasena} = req.body
    let [confirmacionEmail] = await pool.query('select correo from usuario where correo like ?', correo)

    if(confirmacionEmail.length != 0){
        res.status(200).json('Este correo ya esta registrado')
    }
    else{
       const [rows] = await pool.query('call registrarTrabajador(?,?,?,?,?,?,3)', [nombre, paterno, materno, telefono,correo,contrasena])
       res.status(200).json("Usuario registrado con exito!!!!!!!")
    }
    
}

export const getTrabajadores = async (req,res) =>{
    jwt.verify(req.token, 'secretkey', (err,authData) => {
        if(err){
            console.log(err)
            res.sendStatus(403)
        }
    })
    const [[rows]] = await pool.query('call consultarTrabajadores(1,0)')
    res.status(200).json(rows)
}

export const getTrabajador = async (req,res) =>{
    jwt.verify(req.token, 'secretkey', (err,authData) => {
        if(err){
            console.log(err)
            res.sendStatus(403)
        }
    })
    let correo = req.params.id_correo
    const [[rows]] = await pool.query('call consultarTrabajadores(2,?)', correo)
    if(rows.length == 0){
        res.status(200).json("No existe trabajador con este correo")
    }
    else{
        res.status(200).json(rows)
    }
}

export const patchTrabajador = async (req,res) => {
    jwt.verify(req.token, 'secretkey', (err,authData) => {
        if(err){
            console.log(err)
            res.sendStatus(403)
        }
    })
    if(req.body.telefono){
        const rows  = await pool.query('update usuario set num_telefono = ? where correo = ? ', [req.body.telefono,req.params.id_correo])
        res.status(200).json("Telefono Modificado con exito")
    }
    else if(req.body.correo){
        const rows  = await pool.query('update usuario set correo = ? where correo = ? ', [req.body.correo,req.params.id_correo])
        res.status(200).json("Correo modificado con exito")
    }
    else if(req.body.contrasena){
        const rows  = await pool.query('update usuario set contrasena = sha2(?,256) where correo = ? ', [req.body.contrasena,req.params.id_correo])
        res.status(200).json("Contraseña modificada con exito")
    }
    
}
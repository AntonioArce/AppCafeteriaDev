import { pool } from '../database/database.js'
import bcrypt from 'bcryptjs' 

export const getClientes = async (req,res) => {
    const [[rows]] = await pool.query('call consultarClientes(1,2)')
    res.json(rows)
}

export const postClientes = async (req,res) =>{
    const {nombre, paterno, materno, telefono, correo} = req.body
    const passCif = await encrypt(req.body["contrasena"])
    const [rows] = await pool.query('call registrarCliente(?,?,?,?,?,?,2)', [nombre, paterno, materno, telefono,correo,passCif])
    res.send({rows})    
    /* res.send('POST SEND') */
}

const encrypt = async(textPlain) => {
    const hash = await bcrypt.hash(textPlain, 5)
    return hash
}
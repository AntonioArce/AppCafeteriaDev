import { pool } from '../../database/database.js'
import jwt from 'jsonwebtoken'


export const createToken = async (req, res) =>{
    let user = req.body.user
    let pass = req.body.pass
    let [confirmacionEmail] = await pool.query('select correo from usuario where correo like ?',user)
    let [confirmacionContra] = await pool.query('select contrasena from usuario where contrasena = sha2(?,256)', pass)
    let [[typeuser]] = await pool.query('select Rol_idRol from usuario where correo like ?', user)
    console.log(user)
    if(confirmacionEmail.length == 0 )
        res.status(403).send({message: 'No se encontro usuario registrado con este correo'})
    if(confirmacionContra.length == 0)
        res.status(400).send({message: 'La contraseña es incorrecta'})
    else{
        jwt.sign({user, rol}, 'secretkey', (err,token) =>{
            res.status(200).json({
                token: token
            })
        }) 
    }
}

// Authorization: Bearer <token>
export const verificar = (req,res,next) =>{
    const bearerHeader = req.headers.authorization
    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(" ")[1]
        req.token = bearerToken
        next()
    }
    else{
        res.sendStatus(403)
    }
}
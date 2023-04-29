const User = require('../models/usuario')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')

module.exports = {

    login(req,res){
        const email = req.body.email
        const password = req.body.password
        User.findByEmail(email, async (err, myUser) =>{
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error creating user',
                    error: err
                })
            }
            if(!myUser){
                return res.status(401).json({   // El cliente no tiene autorizacion paara realizar esta peticion (401)
                    success: false,
                    message: 'El email no fue encontrado ',
                })
            }

            const isPasswordValid = await bcrypt.compare(password, myUser.contrasena)
            if(isPasswordValid){
                const token = jwt.sign({id: myUser.id, email: myUser.email}, keys.secretOrKey, {})
                const data ={
                    idUsuario: myUser.idUsuario,
                    nombre: myUser.nombre,
                    correo: myUser.correo,
                    rol: myUser.Rol_idRol,
                    session_token: `JWT ${token}` 
                }
                return res.status(201).json({
                    success: true,
                    message: 'Autenticado',
                    data: data
                })
            }
            else{
                return res.status(401).json({   
                    success: false,
                    message: 'La contraseña esta incorrecta ',
                })
            }
        })
    },
    
    register(req,res){
        const user = req.body 
        User.create(user, (err, data) =>{
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error creating user',
                    error: err
                })
            }
            return res.status(201).json({
                success: true,
                message: 'User created',
                user: data
            })
        })
    }
}
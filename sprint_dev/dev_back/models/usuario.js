const db = require('../config/config')
const bcrypt = require('bcryptjs')
const User = {}


User.findById = (id, result) =>{
    const sql = `SELECT 
    idUsuario,
    nombre,
    correo,
    contrasena,
    Rol_idRol,
    FROM usuario WHERE id = ?`

    db.query(sql, [id], (err, user) => {
        if (err) {
            console.log('Error: '+ err)
            result(err, null)
        }
        else{
            console.log('Usuario Obtenido: '+ user[0])
            result(null, user[0])
        }
    })
}

User.findByEmail = (correo, result) =>{
    const sql = `SELECT 
        u.idUsuario, 
        u.nombre, u.apellido_paterno, u.apellido_materno,
        u.num_telefono,
        u.correo,
        u.contrasena,
        u.Rol_idRol,  cl.idCliente
        FROM usuario as u INNER JOIN cliente cl on u.idUsuario = cl.Usuario_idUsuario
        WHERE correo = ?`


    db.query(sql, [correo], (err, user) => {
        if (err) {
            console.log('Error: '+ err)
            result(err, null)
        }
        else{
            console.log('Usuario Obtenido: '+ user[0])
            result(null, user[0])
        }
    })
}


User.create = async (user, result) => {
    const hash = await bcrypt.hash(user.contrasena, 10)
    const sql = `call registerCliente(?,?,?,?,?,?)`

    db.query(sql, [
            user.nombre,
            user.apellido_paterno,
            user.apellido_materno,
            user.num_telefono,
            user.correo,
            hash,
        ],
        (err, res) => {
            if (err) {
                console.log(err)
                result(err, null)
            }
            else{
                console.log('Id del usuario: '+ res.insertId)
                result(null, res.insertId)
            }
        }
    )
}

User.update = (user, result) =>{
    const sql = `UPDATE usuario 
        SET nombre = ?, apellido_paterno = ?, apellido_materno = ?, num_telefono = ?, correo = ? WHERE idUsuario = ?`
        
    db.query(sql, [
        user.nombre,
        user.apellido_paterno,
        user.apellido_materno,
        user.num_telefono,
        user.correo,
        user.idUsuario
    ],
    (err, res) => {
        if (err) {
            console.log('Error: '+err)
            result(err, null)
        }
        else{
            console.log('Usuario Actualizado: '+ user.idUsuario)
            result(null, user.idUsuario)
        }
    })
}

module.exports = User
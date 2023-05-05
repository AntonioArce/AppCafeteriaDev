const db = require('../config/config')
const bcrypt = require('bcryptjs')
const Trabajador = {}

Trabajador.create = async (trabajador, result) => {
    const hash = await bcrypt.hash(trabajador.contrasena, 10)
    const sql = `call registerTrabajador(?,?,?,?,?,?)`

    db.query(sql, [
            trabajador.nombre,
            trabajador.apellido_paterno,
            trabajador.apellido_materno,
            trabajador.num_telefono,
            trabajador.correo,
            hash,
        ],
        (err, res) => {
            if (err) {
                console.log(err)
                result(err, null)
            }
            else{
                console.log('Id employee: ', res.insertId)
                result(null, res.insertId)
            }
        }
    )
}

Trabajador.getAll = (result) => {
    const sql = `select idUsuario,nombre,apellido_paterno,apellido_materno,num_telefono,correo from usuario WHERE Rol_idRol = 3`
    db.query(sql, (err, data) => {
        if (err) {
            console.log('ERROR: '+err)
            result(err, null)
        }
        else{
            console.log('Lista de empleados extraida con exito')
            result(null, data)
        }
    })
}



module.exports = Trabajador 
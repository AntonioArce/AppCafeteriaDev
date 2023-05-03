const db = require('../config/config')
const Category = {}

Category.create = (category, result) => {
    const sql = `INSERT INTO tipo_producto(nombre_tipo, descripcion) VALUES(?,?)`

    db.query(
        sql,[category.nombre, category.descripcion],
        (err, res) => {
            if (err) {
                console.log("Error: ", err)
                result(err,null)
            }
            else{
                console.log('Categoria agregada')
                result(null, res)
            }
        }
    )
}

module.exports = Category
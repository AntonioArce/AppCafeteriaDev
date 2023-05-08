const db = require('../config/config')
const Productos = {}

Productos.create = async (product, result) => {
    const sql = `INSERT INTO productos(nombre, descripcion, stock, precio, Tipo_Producto_idTipo_Producto, is_active, imagen)
    VALUES (?,?,?,?,?,?,?) `

    db.query(
        sql,
        [
            product.nombre,
            product.descripcion,
            product.stock,
            product.precio,
            product.Tipo_Producto_idTipo_Producto,
            1,
            product.imagen,
        ],
        (err, res) => {
            if (err) {
                console.log('Error: ' + err)
                result(err, null)
            } else {
                console.log('Id del nuevo producto: ', res.insertId)
                result(null, res.insertId)
            }
        }
    )
}

Productos.findByCategory = async (idCat, result) => {
    const sql = `SELECT idProductos,nombre, descripcion, stock, precio, imagen FROM productos WHERE Tipo_Producto_idTipo_Producto = ?`
    db.query(
        sql,
        [idCat],
        (err, data) => {
            if (err) {
                console.log('Error:'+ err)
                result(err, null)
            } else {
                result(null, data)
            }
        })
}

module.exports = Productos
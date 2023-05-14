const db = require('../config/config')
const Order = {}

Order.create = (order, result) => {
    const sql = `INSERT INTO 
        orders(id_client, estado, timestamp, created_at, updated_at)
        VALUES(?,?,?,?,?)`

    db.query(
        sql,
        [
            order.id_client, 
            1,
            Date.now(),
            new Date(),
            new Date()
        ],
        (err, res) => {
            if (err) {
                console.log("Error: ", err)
                result(err,null)
            }
            else{
                console.log('ID DE LA NUEVA ORDEN', res.insertId)
                result(null, res.insertId)
            }
        }
    )
}

module.exports = Order
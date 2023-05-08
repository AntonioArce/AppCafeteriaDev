const Productos = require('../models/productos')
const storage = require('../utils/cloud_storage')


module.exports = {
    async findByCategory(req,res){
        id_category = req.params.idTipo_Producto
        Productos.findByCategory(id_category, (err,data)=>{
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error listing products',
                    error: err
                })
            }
            else{
                return res.status(200).json(data)
            }
        })
    },
    async create(req, res){
        const producto = JSON.parse(req.body.product)
        const files = req.files

        if(files.length > 0){
            const path = `image_${Date.now()}`
            const url = await storage(files[0], path)
            if(url != undefined && url != null){
                producto.imagen = url
            }
        }

        Productos.create(producto, (err, data) =>{
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error al registrar producto',
                    error: err
                })
            }
            return res.status(201).json({
                success: true,
                message: 'Producto registrado',
                data: data
            })
        })


    }
}
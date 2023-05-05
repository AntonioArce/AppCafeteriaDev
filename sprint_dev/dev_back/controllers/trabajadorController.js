const Trabajador = require('../models/trabajador')

module.exports = {
    async create(req,res){
        const trabajador = req.body
        Trabajador.create(trabajador, (err,id) => {
            if(err){
                return res.status(500).json({
                    success: false,
                    message: 'Error creating employee',
                    error: err
                })
            }
            return res.status(200).json({
                success: true,
                message: 'Employee created successfully',
                id: `${id}`
            })
        })
    },
    async getAll(req,res){
        Trabajador.getAll((err,data) =>{
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Error getting employee',
                    error: err
                })
            }
            else{
                return res.status(200).json(data)
            }
        })
    }
}
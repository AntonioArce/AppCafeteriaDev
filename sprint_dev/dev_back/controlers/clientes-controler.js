import { pool } from '../database/database.js'

export const getClientes = async (req,res) => {
    const [result] = await pool.query('SELECT 1+1 AS result')
    res.json(result[0])
}
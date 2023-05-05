import React, {useState, useContext} from 'react'
import { AdminEmployeeContext } from '../../../../context/AdminEmployeeContext'

const AdminEmployeeListViewModel = () => {
    const [responseMessage, setResponseMessage] = useState('')
    const { create, employee, getEmployees } = useContext(AdminEmployeeContext)

    return {
        employee,
        responseMessage,
        create,
        getEmployees
    }
}

export default AdminEmployeeListViewModel
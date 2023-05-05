import { useEffect } from 'react'
import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { createContext, useState } from "react";
import { User } from '../../Domain/entities/User'; 
import { AdminCreateEmployeeUseCase } from '../../Domain/useCases/AdminEmployee/CreateEmployeeUseCase';
import { AdminGetAllEmployeeUseCase } from '../../Domain/useCases/AdminEmployee/GetAllEmployee';


export interface AdminEmployeeContextProps {
    employee: User[]
    create(user: User): Promise<ResponseApiDelivery>
    getEmployees(): Promise<void>
}

export const AdminEmployeeContext = createContext({} as AdminEmployeeContextProps);
export const AdminEmployeeProvider = ({children}: any) => {
    const [employee, setEmployee] = useState<User[]>([])

    useEffect(() => {
        getEmployees()
    }, [])
    
    const getEmployees = async (): Promise<void> => {
        const response = await AdminGetAllEmployeeUseCase()
        setEmployee(response)
    }
    const create = async (user: User) =>{
        const response = await AdminCreateEmployeeUseCase(user)
        getEmployees()
        return response
    }

    return (
        <AdminEmployeeContext.Provider value = {{
            employee,
            create,
            getEmployees 
        }}>
            {children}
        </AdminEmployeeContext.Provider>
    )

}
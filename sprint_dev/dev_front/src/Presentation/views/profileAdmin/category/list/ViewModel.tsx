import React, {useState} from 'react'
import { Category } from '../../../../../Domain/entities/Category'
import { GetAllCategoryUseCase } from '../../../../../Domain/useCases/Category/GetAllCategory'
import { DeleteCategoryUseCase } from '../../../../../Domain/useCases/Category/DeleteCategory'

const AdminCategoryListViewModel = () => {
    const [categories, setCategories] = useState<Category[]>([]) 
    const [responseMessage, setResponseMessage] = useState('')
    const getCategories = async() =>{
        const result = await GetAllCategoryUseCase()
        console.log(JSON.stringify(result))
        setCategories(result)
    } 

    const deleteCategory = async (id: string) =>{
        const result =await  DeleteCategoryUseCase(id)
        setResponseMessage(result.message)
        if(result.success){
            getCategories()
        }
    }
    return {
        categories,
        responseMessage,
        getCategories,
        deleteCategory
    }
}

export default AdminCategoryListViewModel
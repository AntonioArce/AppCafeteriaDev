import React,{useState, useContext} from 'react'
import { CreateCategoryUseCase } from '../../../../../Domain/useCases/Category/CreateCategoryUseCase';
import { Category } from '../../../../../Domain/entities/Category';
import { UpdateCategoryUseCase } from '../../../../../Domain/useCases/Category/UpdateCategory';
import { CategoryContext } from '../../../../context/CategoryContext';

const AdminCategoryUpdateViewModel = (category: Category) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState('')
    const [values, setValues] = useState(category);
    const { update } = useContext(CategoryContext)

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value});
    }

    const updateCategory = async () => {
        const response = await update(values)
        if(isValidForm()){
            if(response.success){
                setSuccess('Categoria actualizada con exito')
                console.log("RESULT: "+ JSON.stringify(response.message))
            }
        }
    }

    const isValidForm = (): boolean => {
        if(values.nombre_tipo === ''){
            setErrorMessage('Ingresa el nombre de la categoria')
            return false
        }
        if(values.descripcion === ''){
            setErrorMessage('Ingresa la descripcion')
            return false
        }
        return true;
    }
  
  
    return {
        ...values,
        onChange,
        errorMessage,
        success,
        updateCategory
    }
}

export default AdminCategoryUpdateViewModel
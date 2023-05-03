import React,{useState} from 'react'
import { CreateCategoryUseCase } from '../../../../../Domain/useCases/Category/CreateCategoryUseCase';
import { Category } from '../../../../../Domain/entities/Category';
import { UpdateCategoryUseCase } from '../../../../../Domain/useCases/Category/UpdateCategory';

const AdminCategoryUpdateViewModel = (category: Category) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState('')
    const [values, setValues] = useState(category);

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value});
    }

    const update = async () => {
        const response = await UpdateCategoryUseCase(values)
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
        update
    }
}

export default AdminCategoryUpdateViewModel
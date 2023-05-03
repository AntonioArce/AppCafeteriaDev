import React,{useState} from 'react'
import { CreateCategoryUseCase } from '../../../../../Domain/useCases/Category/CreateCategoryUseCase';

const AdminCategoryCreateViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState('')
    const [values, setValues] = useState({
        nombre: '',
        descripcion: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value});
    }

    const resetForm = async () => {
        setValues({
            nombre: '',
            descripcion: '',
        })
    }

    const create = async () =>{
        const response = await CreateCategoryUseCase(values)
        if(isValidForm()){
            if(response.success){
                setSuccess('Categoria creada con exito')
                console.log("RESULT: "+ JSON.stringify(response.message))
                resetForm()
            }
        }
    }

    const isValidForm = (): boolean => {
        if(values.nombre === ''){
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
        create,
        success
    }
}

export default AdminCategoryCreateViewModel
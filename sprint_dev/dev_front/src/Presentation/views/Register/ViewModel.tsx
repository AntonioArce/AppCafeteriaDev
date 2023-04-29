import { useState } from "react"
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth'

const RegisterViewModel = () =>{
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        num_telefono: '',
        correo: '',
        contrasena: '',
        confirmPassword: ''
    })

    const onChange = (property: string, value: any) =>{
        setValues({...values, [property]: value})
    }

    const Register = async () => {
        if(isValidForm()){
            const response = await RegisterAuthUseCase(values)
            console.log("RESULT: "+ JSON.stringify(response))
        }
    }

    const isValidForm = (): boolean =>{
        if(values.nombre === ''){
            setErrorMessage('Ingresa tu nombre')
            return false
        }
        if(values.apellido_paterno === ''){
            setErrorMessage('Ingresa tus apellidos')
            return false
        }
        if(values.apellido_materno === ''){
            setErrorMessage('Ingresa tu correo electronico')
            return false
        }
        if(values.num_telefono === ''){
            setErrorMessage('Ingresa tu telefono')
            return false
        }
        if(values.contrasena === ''){
            setErrorMessage('Ingresa tu contraseña')
            return false
        }
        if(values.confirmPassword === ''){
            setErrorMessage('Ingresa la confirmacion de la contraseña')
            return false
        }
        if(values.contrasena != values.confirmPassword){
            setErrorMessage('Las contraseñas no coinciden')
            return false
        }
        return true
    }

    return {
        ...values,
        errorMessage,
        onChange,
        Register
    }
}

export default RegisterViewModel
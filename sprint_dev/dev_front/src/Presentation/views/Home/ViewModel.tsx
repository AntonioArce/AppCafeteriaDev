import { useState } from "react";


const HomeViewModel = () =>{
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value});
    }

    const isValidForm = (): boolean => {
        if(values.email === ''){
            setErrorMessage('Ingresa el correo')
            return false
        }
        if(values.password === ''){
            setErrorMessage('Ingresa la contraseña')
            return false
        }
        return true;
    }

    return {
        ...values,
        onChange, 
        errorMessage
    }
}

export default HomeViewModel
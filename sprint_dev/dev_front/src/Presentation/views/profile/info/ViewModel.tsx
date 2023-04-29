import React, {useState} from 'react'
import { RemoveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal'
import { useUserLocal } from '../../../hooks/useUserLocal';

export const ProfileInfoViewModel = () => {
    const { user, getUserSession } = useUserLocal()
    const [values, setValues] = useState({
        nombre: user?.nombre,
        correo: user?.correo,
    });

    const removeSession = async () =>{
        await RemoveUserLocalUseCase()
    }
    return {
        ...values,
        removeSession,
    }
}

export default ProfileInfoViewModel
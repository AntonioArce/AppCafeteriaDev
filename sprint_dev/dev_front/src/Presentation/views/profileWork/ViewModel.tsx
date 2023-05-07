import React, {useState} from 'react'
import { RemoveUserLocalUseCase } from '../../../Domain/useCases/userLocal/RemoveUserLocal'
import { useUserLocal } from '../../hooks/useUserLocal';

export const ProfileWorkViewModel = () => {
    const { user } = useUserLocal()

    const removeSession = async () =>{
        await RemoveUserLocalUseCase()
    }
    return {
        removeSession,
        user
    }
}

export default ProfileWorkViewModel
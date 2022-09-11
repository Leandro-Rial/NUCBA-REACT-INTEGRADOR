import React from 'react'

import { loginWithGoogle } from '../redux/slices/user/userSlices';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const GoogleButton = () => {
    
    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    const onClickGoogleAccount = async () => {
        try {
        
            await dispatch(loginWithGoogle())
        
            navigate('/home')
    
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div
            type='button'
            onClick={() => onClickGoogleAccount()}
        >
            <img
                src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png'
                alt='Google logo'
            />
            Google
        </div>
    )
}

export default GoogleButton

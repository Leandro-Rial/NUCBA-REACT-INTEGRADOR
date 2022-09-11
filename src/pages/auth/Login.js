import React, { useState } from 'react'

import { CustomTextInput, MyTextInputPassword } from '../../utils/Input'
import ButtonFormik from '../../utils/ButtonFormik'

import { login, loginWithGoogle } from '../../redux/slices/user/userSlices'
import { showSuccess } from '../../utils/Toasts'

import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import GoogleButton from '../../utils/GoogleButton'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch()
  
  const navigate = useNavigate();

  const showHidePassword = () => {
    setShowPassword(!showPassword)
  }

  const onSubmitLogin = async (credentials) => {
    try {
      
      await dispatch(login(credentials)).unwrap()

      showSuccess("User logged in successfully!")

      navigate('/home')

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="login--wrapper">
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Enter a correct email")
            .max(255, "max 255 characters")
            .required("Email is required"),
          password: Yup.string()
            .required("Password is required")
        })}
        onSubmit={onSubmitLogin}
      >
        {({
          isValid,
          dirty,
          values,
          handleChange,
          handleSubmit
        }) => (
          <Form onSubmit={handleSubmit}>
            <CustomTextInput
              name="email"
              type="email"
              placeholder="E-mail"
              label="E-mail"
              value={values.email}
              onChange={handleChange}
            />
            <div className="password--login">
              <MyTextInputPassword
                name="password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />

              <div onClick={() => showHidePassword()} className="successCheck">{showPassword ? <VisibilityOff /> : <Visibility />}</div>
            </div>
            <GoogleButton />
            <div className="no-account--texts">
              <p className='texts--p'>You do not have an account? <Link to="/sign-up">Sign up here</Link></p>
            </div>
            <ButtonFormik text="submit" isValid={isValid} dirty={dirty} />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
import React, { useState } from 'react'

import { CustomTextInput, MyTextInputPassword } from '../../utils/Input'
import ButtonFormik from '../../utils/ButtonFormik'
import GoogleButton from '../../utils/GoogleButton'

import { register } from '../../redux/slices/user/userSlices'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const showHidePassword = () => {
    setShowPassword(!showPassword)
  }

  const showHideConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const onSubmitRegister = async (credentials) => {
    try {
      
      await dispatch(register(credentials)).unwrap()

      navigate('/home')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="login--wrapper register">
      <h1 className="login--title">Integrador</h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: ''
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .max(25, "max 25 characters")
            .required("Username is required"),
          email: Yup.string()
            .email("Enter a correct email")
            .max(255, "max 255 characters")
            .required("Email is required"),
          password: Yup.string()
            .required("Password is required")
            .matches(
              /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
              "The password must contain at least 8 characters, one uppercase, one lowercase, and one number"
            ),
          confirmPassword: Yup.string()
            .required("Please retype your password to confirm it.")
            .oneOf([Yup.ref("password"), null], "Your passwords don't match. Please retype your password to confirm it."),
        })}
        onSubmit={onSubmitRegister}
      >
        {({
          isValid,
          dirty,
          values,
          handleChange,
          handleSubmit
        }) => (
          <Form onSubmit={handleSubmit} className="form--login">
            <div>
              <CustomTextInput
                name="username"
                type="text"
                placeholder="Username"
                label="Username"
                value={values.username}
                onChange={handleChange}
              />
              <div className="input-space" style={{ height: 16 }}></div>
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

                <div onClick={() => showHidePassword()} className="successPasswordCheck">{showPassword ? <VisibilityOff /> : <Visibility />}</div>
              </div>
              <div className="password--login">
                <MyTextInputPassword
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  label="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                <div onClick={() => showHideConfirmPassword()} className="successPasswordCheck">{showConfirmPassword ? <VisibilityOff /> : <Visibility />}</div>
              </div>
            </div>
            <div>
              <div className="no-account--texts">
                <p className='texts--p'>Already you have an account? <Link to="/login" className="texts-link">Log in</Link></p>
              </div>
              <div className="btns--wrapper">
                <ButtonFormik text="submit" isValid={isValid} dirty={dirty} />
                <GoogleButton />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Register
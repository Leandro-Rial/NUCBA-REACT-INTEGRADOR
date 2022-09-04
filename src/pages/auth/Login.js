import React, { useState } from 'react'

import { CustomTextInput, MyTextInputPassword } from '../../utils/Input'
import ButtonFormik from '../../utils/ButtonFormik'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const showHidePassword = () => {
    setShowPassword(!showPassword)
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
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
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
            <ButtonFormik text="submit" isValid={isValid} dirty={dirty} />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
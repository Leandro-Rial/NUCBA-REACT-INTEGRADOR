import React from 'react'
import ButtonFormik from '../../utils/ButtonFormik';
import { CustomTextInput } from '../../utils/Input';

import { forgotPassword } from '../../redux/slices/user/userSlices';

// Formik
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  
  const dispatch = useDispatch()

  const onSubmitForgotPassword = async (credentials) => {
    try {

      await dispatch(forgotPassword(credentials)).unwrap()
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="login--wrapper">
      <h1 className="login--title">Forgot Password</h1>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Enter a correct email")
            .max(255, "max 255 characters")
            .required("Email is required")
        })}
        onSubmit={onSubmitForgotPassword}
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
                name="email"
                type="email"
                placeholder="E-mail"
                label="E-mail"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="no-account--texts">
                <p className='texts--p'>Remember the password? <Link to="/login" className="texts-link">Go to login</Link></p>
              </div>
              <ButtonFormik text="submit" isValid={isValid} dirty={dirty} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ForgotPassword
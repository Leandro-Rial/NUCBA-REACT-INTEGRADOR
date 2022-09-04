import React from 'react'
import ButtonFormik from '../../utils/ButtonFormik';
import { CustomTextInput } from '../../utils/Input';

// Formik
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const ForgotPassword = () => {
  return (
    <div className="forgot-password--wrapper">
      <h1>Forgot Password</h1>
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
            <ButtonFormik text="submit" isValid={isValid} dirty={dirty} />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ForgotPassword
// Reactstrap
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'

// Formik and Yup
import { useField } from "formik"

export const CustomTextInput = ({ label, containerStyle, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className="input--form__wrapper">
            {meta.touched && meta.error ? (
                <FormGroup className='form-label-group form--error' style={containerStyle}>
                    <Input id='invalidState' className="form--input" {...field} {...props} invalid />
                    <Label for='invalidState' className="form--label">{label}</Label>
                    <FormFeedback>{meta.error}</FormFeedback>
                </FormGroup>
                ) : (
                <FormGroup className='form-label-group form--success'>
                    <Input id='validState' className="form--input" {...field} {...props} valid />
                    <Label for='validState' className="form--label">{label}</Label>
                </FormGroup>
            )}
        </div>
    )
}

export const MyTextInputPassword = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    
    return (
      <div className="input--form__wrapper">
        {meta.touched && meta.error ? (
          <FormGroup className='form-label-group form--error'>
            <Input id='invalidState-password' className="form--input" {...field} {...props} invalid />
            <Label for='invalidState-password' className="form--label">{label}</Label>
            <FormFeedback>{meta.error}</FormFeedback>
          </FormGroup>
        ) : (
          <FormGroup className='form-label-group form--success'>
            <Input id='validState-password' className="form--input" {...field} {...props} valid />
            <Label for='validState-password' className="form--label">{label}</Label>
          </FormGroup>
        )}
      </div>
    )
}
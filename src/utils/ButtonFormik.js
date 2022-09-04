
import React from 'react'

import { Button } from 'reactstrap'

const ButtonFormik = ({
    text = "",
    dirty,
    isValid,
    onClick = () => {}
    }) => {
    return (
        <div className={!dirty || !isValid ? "btn--wrapper__shadow__disabled" : "btn--wrapper__shadow"}>
            <Button
                type="submit"
                disabled={!dirty || !isValid}
                className={!dirty || !isValid ? "btn--disabled" : "btn"}
                onClick={onClick}
            >
                {text}
            </Button>
        </div>
    )
}

export default ButtonFormik
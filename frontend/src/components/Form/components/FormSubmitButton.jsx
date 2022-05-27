import React from "react";

import "./styles.sass";

export const FormSubmitButton = (props) => {
    const { formId } = props;

    return(
        <input 
            value="Save"
            className="btn-input"
            type="submit"
            form={formId}
        />
    )
}

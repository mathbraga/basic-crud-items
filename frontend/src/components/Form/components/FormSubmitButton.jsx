import React from "react";

import "./styles.sass";

export const FormSubmitButton = (props) => {
    const { onClick, formId } = props;

    return(
        <input 
            value="Save"
            className="btn-input"
            onClick={onClick}
            type="submit"
            form={formId}
        />
    )
}

import React from "react";

import "./styles.sass";

export const FormInput = (props) => {
    const { id, label, className, ...otherProps } = props;

    return(
        <div className="row mb-3">
            <label htmlFor={id} className="col-1 col-form-label">{label}</label>
            <div className="col-sm-3">
                <input id={id} {...otherProps} className={`form-control ${className}`} required />
            </div>
        </div>
    )
}

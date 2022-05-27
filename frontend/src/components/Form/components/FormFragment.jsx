import React from "react";

import "./styles.sass";

export const FormFragment = (props) => {
    const { inputs = [], notification, id } = props;

    return(
        <div id={id}>
            {
                inputs.map((item, index) => (
                    <div className="row mb-3" key={index}>
                        <label htmlFor={item.inputId} className="col-2 col-form-label">{item.label}</label>
                        <div className="col-sm-2">
                            <input id={item.inputId} type="number" className="form-control" required />
                        </div>
                    </div>
                ))
            }
            <span className="notification">{notification}</span>
        </div>
    )
}

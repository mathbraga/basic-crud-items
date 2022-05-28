import React from "react";
import { FormInput } from "./FormInput";

import "./styles.sass";

export const FormFragment = (props) => {
    const { inputs = [], notification, id } = props;

    return(
        <div id={id}>
            {
                inputs.map((item, index) => (
                    <div key={index}>
                        <FormInput {...item} />
                    </div>
                ))
            }
            <span className="notification">{notification}</span>
        </div>
    )
}

import React from "react";

import "./styles.sass";

const Button = (props) => {
    const { buttonText, className } = props; 

    return(
        <button type="button" className={`btn btn-primary header-btn ${className}`}>
            {buttonText}
        </button>
    )
}

export default Button;

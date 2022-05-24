import React from "react";

import "./styles.sass";

const Button = (props) => {
    const { children, className, btnId } = props; 

    return(
        <button id={btnId} type="button" className={`btn btn-primary header-btn ${className}`}>
            {children}
        </button>
    )
}

export default Button;

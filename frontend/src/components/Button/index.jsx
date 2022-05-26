import React from "react";

import "./styles.sass";

const Button = (props) => {
    const { children, onClick, className, btnId } = props; 

    return(
        <button 
            id={btnId}
            type="button"
            className={`btn header-btn ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;

import React from "react";

import "./styles.sass";

const PageContainer = ({ children }) => {
    return(
        <div className="container page-container">
            {children}
        </div>
    )
}

export default PageContainer;

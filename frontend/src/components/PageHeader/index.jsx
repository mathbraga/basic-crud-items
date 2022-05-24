import React from "react";

import "./styles.sass";

const PageHeader = (props) => {
    const { title, children } = props;

    return(
        <div className="page-header">
            <div className="header-title">{title}</div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default PageHeader;

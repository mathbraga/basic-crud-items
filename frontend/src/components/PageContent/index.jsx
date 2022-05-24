import React from "react";

import "./styles.sass";

const PageContent = ({ children = [] }) => {
    return(
        <div className="container-fluid content">
            <div className="row gy-3">
                {children.map((item, index) => {
                    return(
                        <div key={index} className="col-3">{item}</div>
                    )
                })}
            </div>
        </div>
    );
}

export default PageContent;

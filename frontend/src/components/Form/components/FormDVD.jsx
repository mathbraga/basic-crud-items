import React from "react";

import "./styles.sass";

export const FormDVD = () => {
    const dvdId = "size";

    return(
        <div>
            <div className="row mb-3">
                <label for={dvdId} className="col-2 col-form-label">Size (MB)</label>
                <div className="col-sm-2">
                    <input id={dvdId} type="number" className="form-control"/>
                </div>
            </div>
            <span className="description">Please, provide disc space in MB</span>
        </div>
    )
}

import React from "react";

import "./styles.sass";

export const FormDVD = (props) => {
    const { onChange } = props;
    const dvdId = "size";

    return(
        <div>
            <div className="row mb-3">
                <label htmlFor={dvdId} className="col-2 col-form-label">Size (MB)</label>
                <div className="col-sm-2">
                    <input id={dvdId} type="number" className="form-control" required onChange={onChange} />
                </div>
            </div>
            <span className="description">Please, provide disc space in MB</span>
        </div>
    )
}

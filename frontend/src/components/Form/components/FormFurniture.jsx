import React from "react";

import "./styles.sass";

export const FormFurniture = (props) => {
    const { heightRef, widthRef, lengthRef } = props;
    const heightId = "height";
    const widthId = "width";
    const lenghtId = "length";

    return(
        <div>
            <div className="row mb-3">
                <label htmlFor={heightId} className="col-2 col-form-label">Height (CM)</label>
                <div className="col-sm-2">
                    <input id={heightId} type="number" className="form-control" required ref={heightRef} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor={widthId} className="col-2 col-form-label">Width (CM)</label>
                <div className="col-sm-2">
                    <input id={widthId} type="number" className="form-control" required ref={widthRef} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor={lenghtId} className="col-2 col-form-label">Length (CM)</label>
                <div className="col-sm-2">
                    <input id={lenghtId} type="number" className="form-control" required ref={lengthRef} />
                </div>
            </div>
            <span className="description">Please, provide dimensions in HxWxL format</span>
        </div>
    )
}

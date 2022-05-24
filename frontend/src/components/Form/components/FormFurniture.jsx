import React from "react";

import "./styles.sass";

export const FormFurniture = () => {
    const heightId = "height";
    const widthId = "width";
    const lenghtId = "length";

    return(
        <div>
            <div className="row mb-3">
                <label for={heightId} className="col-2 col-form-label">Height (CM)</label>
                <div className="col-sm-2">
                    <input id={heightId} type="number" className="form-control"/>
                </div>
            </div>
            <div className="row mb-3">
                <label for={widthId} className="col-2 col-form-label">Width (CM)</label>
                <div className="col-sm-2">
                    <input id={widthId} type="number" className="form-control"/>
                </div>
            </div>
            <div className="row mb-3">
                <label for={lenghtId} className="col-2 col-form-label">Length (CM)</label>
                <div className="col-sm-2">
                    <input id={lenghtId} type="number" className="form-control"/>
                </div>
            </div>
            <span className="description">Please, provide dimension in HxWxL format</span>
        </div>
    )
}

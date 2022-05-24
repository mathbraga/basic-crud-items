import React from "react";

import "./styles.sass";

export const FormBook = () => {
    const bookId = "weight";

    return(
        <div>
            <div className="row mb-3">
                <label for={bookId} className="col-2 col-form-label">Weight (KG)</label>
                <div className="col-sm-2">
                    <input id={bookId} type="number" className="form-control"/>
                </div>
            </div>
            <span className="description">Please, provide book weight in KG</span>
        </div>
    )
}

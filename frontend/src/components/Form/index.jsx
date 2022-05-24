import React, { useRef, useState } from "react";

import { FormDVD } from "./components/FormDVD";
import { FormBook } from "./components/FormBook";
import { FormFurniture } from "./components/FormFurniture";
import "./styles.sass";

const Form = () => {
    const inputRowClass = "row mb-3";
    const skuId = "sku";
    const nameId = "name";
    const priceId = "price";
    const typeId = "productType";

    const formRef = useRef(null);
    const [formFragment, setFragment] = useState(null);
    const fragmentComponent = [FormDVD, FormBook, FormFurniture];

    const handleSelect = () => {
        setFragment(fragmentComponent[formRef.current.value]);
    }

    return(
        <div id="product_form" className="mt-3">
            <div className={inputRowClass}>
                <label for={skuId} className="col-1 col-form-label">SKU</label>
                <div className="col-sm-3">
                    <input id={skuId} type="text" className="form-control"/>
                </div>
            </div>
            <div className={inputRowClass}>
                <label for={nameId} className="col-1 col-form-label">Name</label>
                <div className="col-sm-3">
                    <input id={nameId} type="text" className="form-control"/>
                </div>
            </div>
            <div className={inputRowClass}>
                <label for={priceId} className="col-1 col-form-label">Price ($)</label>
                <div className="col-sm-3">
                    <input id={priceId} type="number" className="form-control"/>
                </div>
            </div>
            <div className={inputRowClass}>
                <label for={typeId} className="col-2 col-form-label">Type Switcher</label>
                <div className="col-sm-2">
                    <select id={typeId} className="form-select" ref={formRef} onChange={handleSelect}>
                        <option selected></option>
                        <option id="DVD" value={0}>DVD</option>
                        <option id="Book" value={1}>Book</option>
                        <option id="Furniture" value={2}>Furniture</option>
                    </select>
                </div>
            </div>
            <div>{formFragment}</div>
        </div>
    );
}

export default Form;

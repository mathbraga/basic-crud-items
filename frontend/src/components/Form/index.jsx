import React, { useState } from "react";

import { FormInput, FormFragment } from "./components";
import { selectFragment } from "./formUtils";

import "./styles.sass";

const Form = (props) => {
    const { formId, submitData } = props;
    const skuId = "sku";
    const nameId = "name";
    const priceId = "price";
    const typeId = "productType";

    const [fragmentProps, setFragmentProps] = useState({});

    const clearFragmentInputs = () => {
        const fragment = document.getElementById("form-fragment");
        const fragmentInputs = [...fragment.getElementsByTagName("input")];

        fragmentInputs.map(item => item.value = "");
    }

    const handleSelect = (event) => {
        let props = selectFragment(event.target.value);

        setFragmentProps(props);
        clearFragmentInputs();
    }

    const buildAttributeString = (inputs) => {
        const inputsData = [];
        let attributeString = "";

        inputs.map(item => {
            inputsData.push(item.value);
        });
        attributeString = inputsData.join("x");
        
        return attributeString;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const fragment = document.getElementById("form-fragment");
        const fragmentInputs = [...fragment.getElementsByTagName("input")];
        const attributeString = buildAttributeString(fragmentInputs);
        const dataToSubmit = {
            "sku": document.getElementById(skuId).value,
            "name": document.getElementById(nameId).value,
            "price": document.getElementById(priceId).value,
            "productType": document.getElementById(typeId).value,
            "attribute": attributeString
        }

        submitData(dataToSubmit);
    }

    return(
        <form id={formId} className="mt-3" onSubmit={handleSubmit}>
            <FormInput id={skuId} label={"SKU"} type="text" />
            <FormInput id={nameId} label={"Name"} type="text" />
            <FormInput id={priceId} label={"Price ($)"} type="number" step=".01" />
            <div className="row mb-3">
                <label htmlFor={typeId} className="col-2 col-form-label">Type Switcher</label>
                <div className="col-sm-2">
                    <select id={typeId} className="form-select" onChange={handleSelect} required>
                        <option defaultValue=""></option>
                        <option id="DVD" value={1}>DVD</option>
                        <option id="Book" value={2}>Book</option>
                        <option id="Furniture" value={3}>Furniture</option>
                    </select>
                </div>
            </div>
            <FormFragment id="form-fragment" {...fragmentProps} />
        </form>
    );
}

export default Form;

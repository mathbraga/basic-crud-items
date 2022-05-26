import React, { useRef, useState } from "react";

import { FormDVD } from "./components";
import { FormBook } from "./components";
import { FormFurniture } from "./components";
import "./styles.sass";

const Form = (props) => {
    const { formId } = props;
    const inputRowClass = "row mb-3";
    const skuId = "sku";
    const nameId = "name";
    const priceId = "price";
    const typeId = "productType";

    const [formData, setFormData] = useState({});
    const [fragmentData, setFragmentData] = useState("");
    const [formFragment, setFragment] = useState(null);
    const heightRef = useRef(null);
    const widthRef = useRef(null);
    const lengthRef = useRef(null);

    const updateFormData = (event) => {
        let newData = {};
        newData[event.target.id] = event.target.value;
        setFormData(currentData => ({
            ...currentData,
            ...newData
        }));
    }

    const handleInput = (event) => {
        updateFormData(event);
    }

    const handleFragmentInput = (event) => {
        setFragmentData(event.target.value);
    }

    const fragmentComponent = (selected, inputHandler) => {
        let components = [
            "",
            <FormDVD onChange={inputHandler} />,
            <FormBook onChange={inputHandler} />,
            <FormFurniture heightRef={heightRef} widthRef={widthRef} lengthRef={lengthRef} />
        ];
        let selection = components[selected];

        return selection;
    }

    const handleSelect = (event) => {
        updateFormData(event);
        setFragmentData("");
        setFragment(fragmentComponent(event.target.value, handleFragmentInput));
    }

    const buildFurnitureString = () => {
        let height = heightRef.current.value;
        let width = widthRef.current.value;
        let length = lengthRef.current.value;
        let fullDimension = `${height}x${width}x${length}`;

        return fullDimension;
    }

    const returnFragmentData = () => {
        return fragmentData || buildFurnitureString();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let fragmentString = returnFragmentData()
        let fragmentKey = {'attribute': fragmentString};
        setFormData(currentData => ({
            ...currentData,
            ...fragmentKey
        }));

        console.log(formData);
    }

    return(
        <form id={formId} className="mt-3" onSubmit={handleSubmit}>
            <div className={inputRowClass}>
                <label htmlFor={skuId} className="col-1 col-form-label">SKU</label>
                <div className="col-sm-3">
                    <input id={skuId} type="text" className="form-control" required onChange={handleInput} />
                </div>
            </div>
            <div className={inputRowClass}>
                <label htmlFor={nameId} className="col-1 col-form-label">Name</label>
                <div className="col-sm-3">
                    <input id={nameId} type="text" className="form-control" required onChange={handleInput} />
                </div>
            </div>
            <div className={inputRowClass}>
                <label htmlFor={priceId} className="col-1 col-form-label">Price ($)</label>
                <div className="col-sm-3">
                    <input id={priceId} type="number" className="form-control" required onChange={handleInput} />
                </div>
            </div>
            <div className={inputRowClass}>
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
            <div>{formFragment}</div>
        </form>
    );
}

export default Form;

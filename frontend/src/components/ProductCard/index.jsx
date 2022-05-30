import React from "react";

import "./styles.sass";

const ProductCard = (props) => {
    const { className } = props;

    const { sku, name, price, type_id, type_attribute } = props;
    const attributePicker = {1: "Size:", 2: "Weight:", 3: "Dimensions:"};
    const metricPicker = {1: "MB", 2: "KG", 3: ""};

    return(
        <div className="product-card">
            <input type="checkbox" className={`form-check-input ${className}`} />
            <div id="product-sku">{sku}</div>
            <div>{name}</div>
            <div>{`${price} $`}</div>
            <div>{`${attributePicker[type_id]} ${type_attribute} ${metricPicker[type_id]}`}</div>
        </div>
    );
}

export default ProductCard;

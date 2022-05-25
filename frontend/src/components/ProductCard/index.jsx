import React from "react";

import "./styles.sass";

const ProductCard = (props) => {
    const { className, onChange } = props;

    const { sku, name, price, type_id, attribute } = props;
    const priceDecimal = price.toFixed(2);
    const attributePicker = {1: "Size:", 2: "Weight:", 3: "Dimensions:"};
    const metricPicker = {1: "MB", 2: "KG", 3: ""};

    return(
        <div className="product-card">
            <input type="checkbox" className={className} onChange={onChange} />
            <div>{sku}</div>
            <div>{name}</div>
            <div>{`${priceDecimal} $`}</div>
            <div>{`${attributePicker[type_id]} ${attribute} ${metricPicker[type_id]}`}</div>
        </div>
    );
}

export default ProductCard;

import React from "react";

import "./styles.sass";

const ProductCard = (props) => {
    const { sku, name, price, attribute } = props;

    return(
        <div className="product-card">
            <input type="checkbox" className="delete-checkbox" />
            <div>{sku}</div>
            <div>{name}</div>
            <div>{price}</div>
            <div>{attribute}</div>
        </div>
    );
}

export default ProductCard;

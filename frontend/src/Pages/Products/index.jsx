import React from "react";

import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import PageContent from "../../components/PageContent";
import PageContainer from "../../containers/PageContainer/PageContainer";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const data = [
    {
        'sku': 'DVD-001',
        'name': 'Fake DVD',
        'price': 2,
        'type_id': 1,
        'attribute': '256'
    },
    {
        'sku': 'Book-006',
        'name': 'Unreal Book',
        'price': 9,
        'type_id': 2,
        'attribute': '7'
    },
    {
        'sku': 'Furniture-002',
        'name': 'Not Real Furniture',
        'price': 55,
        'type_id': 3,
        'attribute': '25x40x10'
    },
]

const Products = () => {
    const checked = {};

    const handleCheckbox = (index, sku) => {
        if(checked[index])
            delete checked[index];
        else
            checked[index] = sku;
    }

    const handleClick = () => {
        let toBeDeleted = Object.values(checked);
        console.log(toBeDeleted);
    }

    return(
        <PageContainer>
            <PageHeader title="Product List">
                <Link to="/add-product">
                    <Button className="btn-primary">
                        {"ADD"}
                    </Button>
                </Link>
                <Button btnId="delete-product-btn" className="btn-danger" onClick={handleClick}>
                    {"MASS DELETE"}
                </Button>
            </PageHeader>
            <PageContent>
                {data.map((item, index) =>
                    <ProductCard 
                        key={index}
                        {...item}
                        className="delete-checkbox"
                        onChange={() => handleCheckbox(index, item["sku"])}
                    />
                )}
            </PageContent>
            <PageFooter />
        </PageContainer>
    );
}

export default Products;

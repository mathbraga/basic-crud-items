import React from "react";

import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import PageContent from "../../components/PageContent";
import PageContainer from "../../containers/PageContainer/PageContainer";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Buttons";
import { Link } from "react-router-dom";

const data = [
    {
        'sku': 'DVD-001',
        'name': 'Fake DVD',
        'price': '2.00 $',
        'attribute': 'Size: 256 Kg'
    },
    {
        'sku': 'DVD-001',
        'name': 'Fake DVD',
        'price': '2.00 $',
        'attribute': 'Size: 256 Kg'
    },
    {
        'sku': 'DVD-001',
        'name': 'Fake DVD',
        'price': '2.00 $',
        'attribute': 'Size: 256 Kg'
    },
    {
        'sku': 'DVD-001',
        'name': 'Fake DVD',
        'price': '2.00 $',
        'attribute': 'Size: 256 Kg'
    },
    {
        'sku': 'DVD-001',
        'name': 'Fake DVD',
        'price': '2.00 $',
        'attribute': 'Size: 256 Kg'
    },
]

const Products = () => {
    return(
        <PageContainer>
            <PageHeader title={"Product List"}>
                <Link to="/add-product">
                    <Button buttonText="ADD" className="btn-primary" />
                </Link>
                <Button id="delete-product-btn" buttonText="MASS DELETE" className="btn-danger" />
            </PageHeader>
            <PageContent>
                {data.map((item, index) => <ProductCard key={index} {...item} />)}
            </PageContent>
            <PageFooter />
        </PageContainer>
    );
}

export default Products;

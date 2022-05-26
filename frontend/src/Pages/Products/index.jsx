import React, { useEffect, useState } from "react";

import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import PageContent from "../../components/PageContent";
import PageContainer from "../../containers/PageContainer/PageContainer";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import performRequest from "../../utils/performRequest";
import { 
    allProductsUrl as productsUrl,
    massDeleteUrl
} from "../../utils/urls";
import encodeDataToSend from "../../utils/encodeDataToSend";

const Products = () => {
    const checked = {};
    const [products, setProducts] = useState([]);

    const handleCheckbox = (index, sku) => {
        if(checked[index])
            delete checked[index];
        else
            checked[index] = sku;
    }

    const handleMassDelete = () => {
        const checkedLength = Object.keys(checked).length;
        if(checkedLength > 0){
            const toBeDeleted = {'idList': JSON.stringify(Object.values(checked))};
            const requestUrl = massDeleteUrl;
            const method = "POST";
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };
            const encodedData = encodeDataToSend(toBeDeleted);
            performRequest(requestUrl, method, headers, encodedData)
                .then(r => location.reload());
        }
    }

    useEffect(() => {
        let method = "GET";
        let requestUrl = productsUrl;
        performRequest(requestUrl, method)
            .then(response => response.json())
            .then(jsonResponse => setProducts(jsonResponse));
    }, [])

    return(
        <PageContainer>
            <PageHeader title="Product List">
                <Link to="/add-product">
                    <Button className="btn-primary">
                        {"ADD"}
                    </Button>
                </Link>
                <Button btnId="delete-product-btn" className="btn-danger" onClick={handleMassDelete}>
                    {"MASS DELETE"}
                </Button>
            </PageHeader>
            <PageContent>
                {products.map((item, index) =>
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

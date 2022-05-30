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
    const [products, setProducts] = useState([]);

    const getCheckedItems = () => {
        const checkboxElements = [...document.getElementsByClassName('delete-checkbox')];
        const checkedItems = checkboxElements.filter(item => item.checked);
        const checkedSKUs = checkedItems.map(item => item.parentElement.children['product-sku'].textContent);

        return checkedSKUs;
    }

    const handleMassDelete = () => {
        const checkedItems = getCheckedItems();

        if(checkedItems.length > 0){
            const toBeDeleted = {'idList': JSON.stringify(Object.values(checkedItems))};
            const requestUrl = massDeleteUrl;
            const method = "POST";
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };
            const encodedData = encodeDataToSend(toBeDeleted);
            performRequest(requestUrl, method, headers, encodedData)
                .then(r => document.location.reload());
        }
    }

    useEffect(() => {
        let method = "GET";
        let requestUrl = productsUrl;
        performRequest(requestUrl, method)
            .then(response => {
                if(!response.ok)
                    throw new Error("Server error!");
                
                return response.json()
            })
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
                    />
                )}
            </PageContent>
            <PageFooter />
        </PageContainer>
    );
}

export default Products;

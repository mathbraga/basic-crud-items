import React from "react";

import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import PageContainer from "../../containers/PageContainer/PageContainer";
import Button from "../../components/Button";
import Form from "../../components/Form";
import { FormSubmitButton } from "../../components/Form/components";
import { Link, useNavigate } from "react-router-dom";
import encodeDataToSend from "../../utils/encodeDataToSend";
import performRequest from "../../utils/performRequest";
import { newProductUrl as addProductUrl } from "../../utils/urls";

const NewProduct = () => {
    const formId = "product_form";
    const navigateTo = useNavigate();

    const sendData = (data) => {
        const newProductUrl = addProductUrl;
        const encodedData = encodeDataToSend(data);
        const method = "POST";
        const requestHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }

        performRequest(newProductUrl, method, requestHeaders, encodedData)
            .then(response => {
                if(!response.ok)
                    throw new Error("Server error!");
                
                navigateTo('/');
            });
    }

    return(
        <PageContainer>
            <PageHeader title="Product Add">
                <FormSubmitButton formId={formId} />
                <Link to="/">
                    <Button className="btn-danger">
                        {"Cancel"}
                    </Button>
                </Link>
            </PageHeader>
            <Form formId={formId} submitData={sendData} />
            <PageFooter />
        </PageContainer>
    );
}

export default NewProduct;

import React from "react";

import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import PageContainer from "../../containers/PageContainer/PageContainer";
import Button from "../../components/Button";
import Form from "../../components/Form";
import { FormSubmitButton } from "../../components/Form/components";
import { Link, useNavigate } from "react-router-dom";
import encodeDataToSend from "../../utils/encodeDataToSend";

const NewProduct = () => {
    const formId = "product_form";
    const newProductUrl = "http://localhost:8000/resource/newProduct.php";
    const navigateTo = useNavigate();

    const sendData = (data) => {
        const encodedData = encodeDataToSend(data);
        const requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        const requestObject = {
            method: 'POST',
            headers: requestHeaders,
            body: encodedData
        }
        const requestUrl = new Request(newProductUrl);
        
        fetch(requestUrl, requestObject)
            .then(r => navigateTo('/'));
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

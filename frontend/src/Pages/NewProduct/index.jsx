import React from "react";

import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import PageContainer from "../../containers/PageContainer/PageContainer";
import Button from "../../components/Button";
import Form from "../../components/Form";
import { FormSubmitButton } from "../../components/Form/components";
import { Link } from "react-router-dom";

const NewProduct = () => {
    const formId = "product_form";

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
            <Form formId={formId} />
            <PageFooter />
        </PageContainer>
    );
}

export default NewProduct;

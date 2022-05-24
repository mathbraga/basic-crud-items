import React from "react";

import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import PageContainer from "../../containers/PageContainer/PageContainer";
import Button from "../../components/Button";
import Form from "../../components/Form";
import { Link } from "react-router-dom";

const NewProduct = () => {
    return(
        <PageContainer>
            <PageHeader title="Product Add">
                <Button className="btn-primary">
                    {"Save"}
                </Button>
                <Link to="/">
                    <Button className="btn-danger">
                        {"Cancel"}
                    </Button>
                </Link>
            </PageHeader>
            <Form />
            <PageFooter />
        </PageContainer>
    );
}

export default NewProduct;

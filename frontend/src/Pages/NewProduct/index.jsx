import React from "react";

import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import PageContent from "../../components/PageContent";
import PageContainer from "../../containers/PageContainer/PageContainer";

const NewProduct = () => {
    return(
        <PageContainer>
            <PageHeader title={"Product Add"} />
            <PageContent />
            <PageFooter />
        </PageContainer>
    );
}

export default NewProduct;

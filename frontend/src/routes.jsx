import React from "react";
import { 
    BrowserRouter as Router,
    Routes as Routing,
    Route,
    Navigate
} from "react-router-dom";

import Products from "./Pages/Products";
import NewProduct from "./Pages/NewProduct";

const Routes = () => {
    return(
        <Router>
            <Routing>
                <Route path="/" exact element={<Products />} />
                <Route path="/add-product" exact element={<NewProduct />} />
                <Route 
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routing>
        </Router>
    );
}

export default Routes;

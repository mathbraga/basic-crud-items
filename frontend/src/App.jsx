import React, { useEffect, useState } from "react";
import encodeDataToSend from "./utils/encodeDataToSend";

const App = () => {
    const [message, setMessage] = useState({});
    const dataToSend = {
        'sku': 'dvd-005',
        'name': 'Test DVD',
        'price': 99,
        'type': 1,
        'attribute': '256',
    };
    const encodedData = encodeDataToSend(dataToSend);

    useEffect(() => {
        fetch("http://localhost:8000/resource/newProduct.php",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: encodedData
        })
            .then(_ => {
                return (fetch("http://localhost:8000/resource/allProducts.php")
                        .then(response => response.json())
                        .then(response => setMessage(response)))
            })
    }, [])

    return (
        <>
            <div>Result:</div>
            <div>
                {
                    Object.entries(message).map(
                        item => 
                            <div key={item[0]}>
                                {`${JSON.stringify(item[1]['sku'])}`}
                            </div>
                    )
                }
            </div>
        </>
    );
}

export default App;

import React, { useEffect, useState } from "react";

const App = () => {
const [message, setMessage] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/resource/request_manager.php")
            .then(response => response.json())
            .then(response => setMessage(response))
    }, [])

    return (
        <>
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

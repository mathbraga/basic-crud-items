const performRequest = (url, method, headers = {}, data = null) => {
    const requestUrl = new Request(url);
    const requestObject = {
        method: method,
        headers: headers,
        body: data
    }
    return fetch(requestUrl, requestObject);
}

export default performRequest;

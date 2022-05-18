const encodeDataToSend = (data) => {
    let encodedData = [];

    for(let key in data){
        let encodedKey = encodeURIComponent(key);
        let encodedValue = encodeURIComponent(data[key]);

        encodedData.push(`${encodedKey}=${encodedValue}`);
    }

    encodedData = encodedData.join("&");
    return encodedData;
}

export default encodeDataToSend;

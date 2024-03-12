const strinToObject = (val: string) => {
    // Split the string into an array of key-value pairs
    const keyValuePairs = val.slice(9, -1).split(",");

    // Convert the array of key-value pairs into an object
    return Object.fromEntries(keyValuePairs.map((pair) => pair.split(":")));
}
export default strinToObject;
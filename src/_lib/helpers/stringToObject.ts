const stringToObject = (val: string) => {
    // Remove all of the double quotes from the string
    const trimmedString = val.replace(/"/g, "");

    // Split the string into an array of key-value pairs
    const keyValuePairs = trimmedString.split(",");

    // Convert the array of key-value pairs into an object
    return Object.fromEntries(keyValuePairs.map((pair) => pair.split(":")));
};
export default stringToObject;



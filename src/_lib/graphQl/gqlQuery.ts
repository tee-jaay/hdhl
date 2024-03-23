import { graphQlUrl } from "../variables/constants";

const gqlQuery = async (query: string, variables?: Record<string, unknown>) => {
    // Send the query to the GraphQL API
    const response = await fetch(`${graphQlUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables,
        }),
        next: { revalidate: 3600 }
    });

    // Parse the response body as JSON
    const responseData = await response.json();
    const data = responseData?.data;

    // Return the data from the GraphQL API
    return data;
};
export default gqlQuery;
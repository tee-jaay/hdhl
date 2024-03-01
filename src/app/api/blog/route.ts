import gqlQuery from "@/_lib/graphQl/gqlQuery";

export async function POST(request: Request) {
    // Parse the request body as JSON
    const requestData = await request.json();

    // Extract the GraphQL query and variables from the request body
    const query = requestData.query;
    const variables = requestData.variables;

    // Send the GraphQL query to the API
    const data = await gqlQuery(query, variables);

    // Return the data from the GraphQL API as a JSON response
    return new Response(JSON.stringify(data));
}

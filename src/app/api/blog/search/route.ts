import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getPostsBySearchText from "@/_lib/graphQl/queries/getPostsBySearchText";

export async function POST(request: Request) {
    try {
        // Parse the request body to get searchText
        const requestBody = await request.json();
        const searchText = requestBody.searchText;

        const query = getPostsBySearchText();
        const variables = { search: searchText };
        const response = await gqlQuery(query, variables);
        const posts = response.posts.nodes;

        // Return the response as JSON
        return new Response(JSON.stringify(posts), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "An error occurred" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

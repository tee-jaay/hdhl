import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getSocialLinks from "@/_lib/graphQl/queries/getSocialLinks";

export async function GET(_request: Request) {
    try {
        const query = getSocialLinks();
        const variables = {};
        const response = await gqlQuery(query, variables);
        const links = response?.gslinks?.nodes;
        // Return the response as JSON
        return new Response(JSON.stringify(links), {
            headers: { "Content-Type": "application/json", },
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

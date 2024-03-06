import gqlQuery from "@/_lib/graphQl/gqlQuery";
import sendPostComment from "@/_lib/graphQl/mutations/sendPostComment";

import { v4 as uuidv4 } from "uuid";

const clientMutationId = uuidv4();

export async function POST(request: Request) {
    try {
        // Parse the request body to get searchText
        const body = await request.json();

        const query = sendPostComment();
        const variables = {
            clientMutationId: clientMutationId,
            content: body?.message,
            commentOn: parseInt(body?.postId),
            author: body?.name,
            authorEmail: body?.email,
            authorUrl: body?.website,
        };
        const response = await gqlQuery(query, variables);

        // Return the response as JSON
        return new Response(JSON.stringify(response), {
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
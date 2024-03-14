// Register
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import registerUser from "@/_lib/graphQl/mutations/registerUser";
import rateLimitMiddleware from "@/_lib/middlewares/rateLimitMiddleware";

import { v4 as uuidv4 } from "uuid";

const clientMutationId = uuidv4();

export async function POST(request: Request) {
    const requestWithSocket = request as Request & { socket: any };
    const middlewareResponse = await rateLimitMiddleware(requestWithSocket);

    if (middlewareResponse instanceof Response) {
        return middlewareResponse;
    }

    try {
        // Parse the request body to get searchText
        const body = await request.json();

        const query = registerUser();
        const variables = {
            clientMutationId: clientMutationId,
            email: body?.email,
            password: body?.password,
            username: body?.username,
        };
        const response = await gqlQuery(query, variables);

        // Return the response as JSON
        return new Response(JSON.stringify(response?.registerUser?.user), {
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
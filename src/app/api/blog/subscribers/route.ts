import mailchimp from '@mailchimp/mailchimp_marketing';

import rateLimitMiddleware from '@/_lib/middlewares/rateLimitMiddleware';

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
});
const listId = process.env.MAILCHIMP_AUDIENCE_ID!;

export async function POST(request: Request) {
    // Limit request code
    const requestWithSocket = request as Request & { socket: any };
    const middlewareResponse = await rateLimitMiddleware(requestWithSocket);

    if (middlewareResponse instanceof Response) {
        return middlewareResponse;
    }

    try {
        // Parse the request body as JSON
        const requestData = await request.json();

        // Send Mailchimp request
        const response = await mailchimp.lists.addListMember(listId, {
            email_address: requestData?.email,
            status: "subscribed",
        });
        return new Response(JSON.stringify(response));
    } catch (error) {
        return new Response(JSON.stringify({ error: error }), {
            status: 500,
            headers: { "Content-Type": "application/json", },
        });
    }
}


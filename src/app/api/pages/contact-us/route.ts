export async function POST(request: Request) {
    console.log(request.body);
    const formData = {};
    try {
        // Make the request and return the data
        const res = await fetch(`${process.env.MAILER_URL}/send-email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ formData }),
        });
        const data = await res.json();
        console.log('submitForm', data);
        return data;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    };
    return new Response(JSON.stringify('POST'));
}
import Mailgun from "mailgun-js";

const apiKey = process.env.MAILGUN_API_KEY || "";
const domain = process.env.MAILGUN_DOMAIN || "";
const contactEmail = process.env.CONTACT_EMAIL || "";

const mailgun = new Mailgun({
    apiKey: apiKey,
    domain: domain,
});

interface MessageData {
    from: string,
    to: string,
    subject: string,
    text: string,
}

export async function POST(request: Request) {
    const { formData } = await request.json();

    const messageData: MessageData = {
        from: formData.email,
        subject: formData.subject,
        text: formData.message,
        to: contactEmail,
    };

    try {
        await mailgun.messages().send(messageData);
        return new Response("Message sent successfully");
    } catch (error) {
        console.error(error);
        return new Response("Error sending message", { status: 500 });
    }
}
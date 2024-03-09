import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { contactEmail, smtpHost, smtpPassword, smtpPort, smtpUsername } from "@/_lib/variables/constants";
import rateLimitMiddleware from "@/_lib/middlewares/rateLimitMiddleware";

export async function POST(request: Request) {
    const requestWithSocket = request as Request & { socket: any };
    const middlewareResponse = await rateLimitMiddleware(requestWithSocket);

    if (middlewareResponse instanceof Response) {
        return middlewareResponse;
    }

    try {
        const { subject, message, email, name } = await request.json();

        const transporter = nodemailer.createTransport({
            host: smtpHost!,
            port: smtpPort,
            secure: true,
            auth: {
                user: smtpUsername!,
                pass: smtpPassword!
            }
        } as SMTPTransport.Options);

        const mailOptions = {
            from: email,
            to: contactEmail,
            subject: subject,
            html: `
        <h3>${name}</h3>
        <li> title: ${subject}</li>
        <li> message: ${message}</li> 

        <hr/>
        by: ${email}
      `
        };

        const transporterResp = await transporter.sendMail(mailOptions);
        console.log(transporterResp);

        return new Response(
            JSON.stringify({
                message: "Email Sent Successfully",
                messageId: transporterResp?.messageId,
            }),
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return new Response(
            JSON.stringify({ message: "Failed to Send Email" }),
            { status: 500 }
        );
    }
}
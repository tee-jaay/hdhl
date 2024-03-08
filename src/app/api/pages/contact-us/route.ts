import { Resend } from 'resend';
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import rateLimitMiddleware from "@/_lib/middlewares/rateLimitMiddleware";

const contactEmail = process.env.CONTACT_EMAIL!;
const smtpHost = process.env.SMTP_HOST!;
const smtpPort = parseInt(process.env.SMTP_PORT!);
const smtpUsername = process.env.SMTP_USERNAME!;
const smtpPassword = process.env.SMTP_PASSWORD!;
const resendApiKey = process.env.RESEND_API_KEY;

const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
    const requestWithSocket = request as Request & { socket: any };
    const middlewareResponse = await rateLimitMiddleware(requestWithSocket);

    if (middlewareResponse instanceof Response) {
        return middlewareResponse;
    }
    try {
        const { subject, message, email, name } = await request.json();

        const sendMail = await resend.emails.send({
            from: email,
            to: contactEmail,
            subject: subject,
            html: `<p>${message} - ${name}</p>`
        });

        console.log(sendMail);

        //     const transporter = nodemailer.createTransport({
        //         host: smtpHost!,
        //         port: smtpPort,
        //         secure: true,
        //         auth: {
        //             user: smtpUsername!,
        //             pass: smtpPassword!
        //         }
        //     } as SMTPTransport.Options);

        //     const mailOptions = {
        //         from: email,
        //         to: contactEmail,
        //         subject: subject,
        //         html: `
        //     <h3>${name}</h3>
        //     <li> title: ${subject}</li>
        //     <li> message: ${message}</li> 

        //     <hr/>
        //     by: ${email}
        //   `
        //     };

        //     const sendMail = await transporter.sendMail(mailOptions);
        //     console.log(sendMail);

        return new Response(
            JSON.stringify({
                message: "Email Sent Successfully",
                sendMail: sendMail,
                // messageId: sendMail?.messageId,
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


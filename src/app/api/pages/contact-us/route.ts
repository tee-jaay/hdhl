import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import rateLimitMiddleware from "@/_lib/_middlewares/rateLimitMiddleware";

const contactEmail = process.env.CONTACT_EMAIL!;
const smtpHost = process.env.SMTP_HOST!;
const smtpPort = parseInt(process.env.SMTP_PORT!);
const smtpUsername = process.env.SMTP_USERNAME!;
const smtpPassword = process.env.SMTP_PASSWORD!;

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

        const sendMail = await transporter.sendMail(mailOptions);

        return NextResponse.json({
            message: "Email Sent Successfully",
            messageId: sendMail?.messageId,
        }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}
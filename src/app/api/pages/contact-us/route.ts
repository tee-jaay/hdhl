// import { Resend } from 'resend';

// export async function POST(request: Request) {
//     const resend = new Resend(process.env.RESEND_API_KEY!);
//     const requestBody = await request.json();
//     try {
//         const { data } = await resend.emails.send({
//             from: requestBody?.email,
//             to: process.env.CONTACT_EMAIL!,
//             subject: requestBody?.subject,
//             html: requestBody?.message,
//         });
//         return new Response(JSON.stringify(data));
//     } catch (error) {
//         console.log(error);
//         return new Response(JSON.stringify(error));
//     }
// }
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function POST(request: Request) {
    try {
        const { subject, message, email, name } = await request.json();

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST!,
            port: parseInt(process.env.SMTP_PORT!),
            secure: true,
            auth: {
                user: process.env.SMTP_USERNAME!,
                pass: process.env.SMTP_PASSWORD!
            }
        } as SMTPTransport.Options);

        const mailOption = {
            from: email,
            to: process.env.CONTACT_EMAIL!,
            subject: subject,
            html: `
        <h3>${name}</h3>
        <li> title: ${subject}</li>
        <li> message: ${message}</li> 
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}

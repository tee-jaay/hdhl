import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const contactEmail = process.env.CONTACT_EMAIL!;
const smtpHost = process.env.SMTP_HOST!;
const smtpPort = parseInt(process.env.SMTP_PORT!);
const smtpUsername = process.env.SMTP_USERNAME!;
const smtpPassword = process.env.SMTP_PASSWORD!;

const rateLimit = 1; // Maximum number of requests allowed within the time window
const timeWindow = parseInt(process.env.TIME_WINDOW!); // Time window in milliseconds

const requestCounts = new Map(); // Map to store request counts for each IP address

async function middleware(request: Request & { socket: any }) {
    const ipAddress = request.headers.get("X-Forwarded-For") || request.socket.remoteAddress; // Get the IP address from the request headers or socket
    const now = Date.now(); // Get the current timestamp

    if (requestCounts.has(ipAddress)) {
        // If request count exists for the IP address
        const requestCount = requestCounts.get(ipAddress);

        if (now - requestCount.timestamp > timeWindow) {
            // If the time difference between the current request and last recorded request is greater than the time window
            requestCounts.set(ipAddress, { count: 1, timestamp: now }); // Start a new count for the IP address
        } else {
            // If the time difference is within the time window
            requestCounts.set(ipAddress, { count: requestCount.count + 1, timestamp: requestCount.timestamp }); // Increment the existing count
        }

        if (requestCounts.get(ipAddress).count > rateLimit) {
            // If the count exceeds the rate limit
            return new Response("Too Many Requests", { status: 429 }); // Return a 429 Too Many Requests response
        }
    } else {
        // If no request count exists for the IP address
        requestCounts.set(ipAddress, { count: 1, timestamp: now }); // Start a new count for the IP address
    }

    return null; // No response if the request is within the rate limit
}

export async function POST(request: Request) {
    const requestWithSocket = request as Request & { socket: any };
    const middlewareResponse = await middleware(requestWithSocket);

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
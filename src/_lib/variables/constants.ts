// Server
export const appName: string = process.env.APP_NAME!;
export const appUrl: string = process.env.APP_URL!;
export const baseUrl: string = process.env.BASE_URL!;
export const graphQlUrl: string = process.env.GRAPHQL_URL!;
export const timeWindow: string = process.env.TIME_WINDOW!;
export const msValidate: string = process.env.MS_VALIDATE!;
export const ahrefsValidate: string = process.env.AHREFS_VALIDATE!;

export const contactEmail: string = process.env.CONTACT_EMAIL!;
export const smtpHost: string = process.env.SMTP_HOST!;
export const smtpPort: number = parseInt(process.env.SMTP_PORT!);
export const smtpUsername: string = process.env.SMTP_USERNAME!;
export const smtpPassword: string = process.env.SMTP_PASSWORD!;

// Public
export const publicAppUrl: string = process.env.NEXT_PUBLIC_APP_URL!;
export const publicContactEmail: string = process.env.NEXT_PUBLIC_CONTACT_EMAIL!;

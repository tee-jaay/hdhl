## Getting Started

### Provide the .env variables values

#### For the App
```bash
APP_NAME=
SITE_URL=
APP_URL=
BASE_URL=
GRAPHQL_URL=
```
(BASE_URL should be real domain URL)

#### For Contact Page
```bash
NEXT_PUBLIC_CONTACT_EMAIL=
CONTACT_EMAIL=
SMTP_HOST=
SMTP_PORT=
SMTP_USERNAME=
SMTP_PASSWORD=
TIME_WINDOW=180000
```
#### For Search Engines
````bash
MS_VALIDATE=
````

#### For AHREFS Engines
````bash
AHREFS_VALIDATE=
````

#### For MailChimp
````bash
MAILCHIMP_API_KEY=
MAILCHIMP_SERVER_PREFIX=
MAILCHIMP_AUDIENCE_ID=
````

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

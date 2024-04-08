import { Feed } from 'feed';
import fs from 'fs';

import gqlQuery from '@/_lib/graphQl/gqlQuery';
import getAllPublishedPosts from '@/_lib/graphQl/queries/getAllPublishedPosts';
import truncateString from '@/_lib/helpers/truncrateString';

export async function POST(request: Request) {
    const webhookKey = process.env.CUSTOM_WEBHOOK_KEY ?? "";
    const reader = request.body ? request.body.getReader() : null;
    const result = await reader?.read();
    const dataString = result ? new TextDecoder().decode(result.value) : null;
    const { key } = JSON.parse(dataString || "{}");

    if (key !== webhookKey) {
        console.log('Unauthorized');
        const errorResponse = new Response(JSON.stringify({
            status: 401,
            statusText: 'Unauthorized',
            headers: { 'Content-Type': 'application/json' }
        }));
        return errorResponse;
    }

    // Create the rss.xml file if it doesn't exist
    if (!fs.existsSync('public/rss.xml')) {
        fs.writeFileSync('public/rss.xml', '');
    }

    const feed = new Feed({
        title: `${process.env.APP_NAME} RSS Feed`,
        description: `${process.env.APP_TAGLINEThis}`,
        id: process.env.BASE_URL || "",
        link: process.env.BASE_URL || "",
        language: 'en',
        copyright: `All rights reserved 2024, ${process.env.APP_NAME}`,
    });

    const query = getAllPublishedPosts();
    const variables = {};
    await gqlQuery(query, variables)
        .then((res) => {
            res?.posts?.nodes.forEach((element: {
                featuredImage: any;
                slug: string;
                date: string | number | Date;
                title: string;
                content: string;
            }) => {
                feed.addItem({
                    title: element.title,
                    id: `${process.env.BASE_URL}/${element.slug}`,
                    link: `${process.env.BASE_URL}/${element.slug}`,
                    description: truncateString(element.content, 200),
                    date: new Date(element.date),
                    image: element?.featuredImage?.node?.sourceUrl,
                });
            });
        })
        .catch((e) => console.error(e));

    // Write the RSS feed to a file
    const rssXml = feed.rss2();
    fs.writeFileSync('public/rss.xml', rssXml);

    return new Response(rssXml);
}
import { ImageResponse } from 'next/og'

import gqlQuery from '@/_lib/graphQl/gqlQuery'
import getPostSEOBySlug from '@/_lib/graphQl/queries/getPostSEOBySlug'

export const runtime = 'edge'

export const alt = 'Post Details'
export const size = {
    width: 643,
    height: 680,
}
export const contentType = 'image/png'

const getData = async (params: string) => {
    // Construct the query and variables
    const query = getPostSEOBySlug();
    const variables = { slug: params, };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

export default async function Image({ params }: { params: { slug: string } }) {
    const { post } = await getData(params?.slug);

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 48,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `url(${post?.seo?.opengraphImage?.sourceUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div style={{ backgroundColor: 'rgba(255,255,255,0.5)', padding: '12px', }} >
                    {post?.seo?.title}
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
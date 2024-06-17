import { getServerSideSitemapIndex } from 'next-sitemap'

import { baseUrl } from '@/_lib/variables/constants';
import getSitemapsArray from '@/_lib/helpers/getSitemapsArray';

export async function GET(_request: Request) {
    const sitemapsArr = await getSitemapsArray();
    const smLength = sitemapsArr?.length;
    const sitemapPaths: string[] = [];

    // Posts sitemaps
    if (smLength !== undefined && smLength >= 0) {
        // Loop through sitemapsLength    
        for (let n = 0; n < smLength; n++) {
            const path = `${baseUrl}/sitemap/${n}.xml`;
            sitemapPaths.push(path);
        }
    }

    return getServerSideSitemapIndex(sitemapPaths);
}

import { getServerSideSitemapIndex } from 'next-sitemap'

import { apiUrl, baseUrl } from '@/_lib/variables/constants';

async function getSitemapsLength() {
    // Fetch and count total posts
    const categoriesUrl = `${apiUrl}/wp-json/wp/v2/categories?_fields=id,count&per_page=100`;

    try {
        const response = await fetch(categoriesUrl);
        if (!response.ok) {
            throw new Error(`Error fetching categories: ${response.status}`);
        }
        const data = await response.json();
        interface Category { id: number, count: number, }
        // total posts
        const totalPosts = data.reduce((acc: number, category: Category) => acc + category.count, 0);
        // number of sitemap pages
        const numSitemaps = Math.ceil(totalPosts / 100);
        // sitemap objects
        const sitemapsArr = Array.from({ length: numSitemaps }, (_, index) => ({ id: index, }));
        const sitemapsLength = sitemapsArr.length;
        return sitemapsLength;
    } catch (error) {
        console.error('Error generating sitemaps:', error);
    }
}

export async function GET(request: Request) {
    const smLength = await getSitemapsLength();
    const sitemapPaths: string[] = [];

    if (smLength !== undefined && smLength >= 0) {
        // Loop through sitemapsLength    
        for (let n = 0; n <= smLength; n++) {
            const path = `${baseUrl}/sitemap/${n}.xml`;
            sitemapPaths.push(path);
        }
    }

    return getServerSideSitemapIndex(sitemapPaths);
}

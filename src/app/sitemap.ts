import { MetadataRoute } from "next";

import { apiUrl, baseUrl } from "@/_lib/variables/constants";
import getSitemapsArray from "@/_lib/helpers/getSitemapsArray";

export async function generateSitemaps() {
    // Fetch and count total posts
    const sitemapsArr = await getSitemapsArray();
    return sitemapsArr;
}

interface MetadataRoute {
    Sitemap: {
        url: string;
        lastModified: string;
        changeFrequency: string;
        priority: number;
    }[];
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
    let posts: { post_name: string; post_date: string }[] = [];
    // Limit
    const start = id * 100
    const end = start + 100

    // Get posts
    posts = await getPosts();

    // Generate sitemaps
    return posts?.slice(start, end).map((post) => ({
        url: `${baseUrl}/${post?.post_name}`,
        lastModified: new Date(post.post_date).toISOString(),
        changeFrequency: "weekly",
        priority: 0.5,
    }));
}

async function getPosts(): Promise<{ post_name: string; post_date: string }[]> {
    try {
        const url = `${apiUrl}/wp-json/wp/v2/posts-for-sitemap/posts`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching posts by IDs: ${response.status}`);
        }
        // Handle ReadableStream response
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Catch error: ', error);
        // Explicitly return undefined in case of error
        return [];
    }
}

import { MetadataRoute } from "next";
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getAllPublishedPosts from "@/_lib/graphQl/queries/getAllPublishedPosts";

const baseUrl = process.env.BASE_URL;

export async function generateSitemaps() {
    // Fetch the total number of posts and calculate the number of sitemaps needed
    return [{ id: 0 }]
}

export default async function sitemap({ id, }: { id: number }): Promise<MetadataRoute.Sitemap> {
    const query = getAllPublishedPosts();
    const variables = {};
    const { posts } = await gqlQuery(query, variables);

    return posts?.nodes.map((post: { slug: string; date: string; }) => ({
        url: `${baseUrl}/${post?.slug}`,
        lastModified: post.date,
        changeFrequency: "daily"
    }));
}
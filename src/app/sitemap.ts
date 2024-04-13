import { MetadataRoute } from "next";
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import { baseUrl } from "@/_lib/variables/constants";
import getAllPublishedPosts from "@/_lib/graphQl/queries/getAllPublishedPosts";

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
        lastModified: new Date(post.date).toISOString(),
        changeFrequency: "daily",
        priority: 0.8,
    }));
}
export default interface ProfileProps {
    databaseId: number,
    slug: string,
    name: string,
    postsCount: number,
    title: string,
    excerpt: string,
    featuredImage: {
        node:
        {
            altText: string,
            sourceUrl: string,
        }

    },
    content: string,
}

import CategoryProps from "./CategoryProps"

interface PostCardProps {
    postId: number,
    title: string,
    slug: string,
    id: string,
    excerpt: string,
    featuredImage: {
        node: {
            sourceUrl: string,
            altText: string
        }
    },
    author: {
        node: {
            name: string,
            slug: string,
            avatar: {
                url: string
            }
        }
    },
    categories: {
        nodes: CategoryProps[]
    },
    commentCount: number,
    date: string
}
export default PostCardProps;
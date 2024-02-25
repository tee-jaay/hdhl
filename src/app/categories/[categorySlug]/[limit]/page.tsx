import Link from "next/link";
import Image from "next/image";

import formatDate from "@/_helpers/formatPostDate";
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getPostsByCategory from "@/_lib/graphQl/queries/getPostsByCategory";

const getData = async (categorySlug: string, limit: string) => {
    // Construct the query and variables
    const query = getPostsByCategory();
    // Convert the limit to an integer
    const parsedLimit = parseInt(limit, 10);
    const variables = {
        category: categorySlug,
        limit: parsedLimit || 12,
    };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data?.posts?.nodes;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

interface PostItemProps {
    id: string,
    title: string,
    slug: string,
    excerpt: string,
    featuredImage: {
        node: {
            sourceUrl: string,
            altText: string,
        }
    },
    author: {
        node: { name: string, slug: string, avatar: [{ url: string }] }
    },
    categories: { nodes: [{ name: string, slug: string }] },
    commentCount: number,
    date: string
}

const PostItem = ({ post }: { post: PostItemProps }) => <Link href={`/${post?.slug}`} className="post_item bg-no-repeat bg-center" title={post?.title} style={{ backgroundImage: `url(${post?.featuredImage?.node?.sourceUrl})` }}>
    <div className="text-white h-96  bg-gradient-to-b from-transparent to-black">
        <div className="post_data flex flex-col items-start justify-end px-8 py-4 h-full">
            <div className="post_meta flex space-x-4">
                <div className="date text-white">{formatDate(post?.date, "numeric")}</div>
                <div className="author text-white flex line-clamp-1 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                        </svg>
                    </span>
                    <span>{post?.author?.node?.name}</span>
                </div>
            </div>
            <div className="post_title mt-1 mb-3">
                <h4 className="text-2xl leading-6 text-white line-clamp-3">{post?.title}</h4>
            </div>
            <div className="post_exercpt line-clamp-2 text-white" dangerouslySetInnerHTML={{ __html: post?.excerpt ?? "" }} />
        </div>
    </div>
</Link>

const CategoryPage = async ({ params }: { params: { categorySlug: string, limit: string } }) => {
    const posts = await getData(params.categorySlug, params.limit);
    return (
        <div className="category_page">
            <div className="posts_list grid grid-cols-3 gap-8">
                {posts && posts.map((post: PostItemProps, _i: number) => <PostItem key={post?.id} post={post} />)}
                {posts.length < 1 && <p>No post yet.</p>}
            </div>
        </div>
    );
}

export default CategoryPage;
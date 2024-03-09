import React from "react";
import Image from "next/image";
import Link from "next/link";

import PostCardProps from "@/_lib/models/PostCardProps";
import formatDate from "@/_lib/helpers/formatPostDate";
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getPostsByTag from "@/_lib/graphQl/queries/getPostsByTag";

const getData = async (tagSlug: string, limit: string) => {
    // Construct the query and variables
    const query = getPostsByTag();
    // Convert the limit to an integer
    const parsedLimit = parseInt(limit, 10);
    const variables = {
        tag: tagSlug,
        first: parsedLimit || 12,
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


const PostItem: React.FC<{ post: PostCardProps }> = ({ post }) => <Link href={`/${post?.slug}`} className="post_item" title={post?.title}>
    <div className="text-white relative h-96">
        <div className="post_image z-10">
            <Image src={post?.featuredImage?.node?.sourceUrl} alt={post?.featuredImage?.node?.altText} width={400} height={600} />
        </div>
        <div className="post_data absolute z-20 px-8 py-4 bottom-0 bg-black opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div className="post_meta flex space-x-4">
                <div className="date text-white">{formatDate(post?.date, "numeric")}</div>
                <div className="author text-white flex line-clamp-1 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                        </svg>
                    </span>
                    <span className="sm:text-sm ml-1">{post?.author?.node?.name}</span>
                </div>
            </div>
            <div className="post_title">
                <h4 className="md:text-xl lg:text-2xl leading-6 text-white dark:text-white line-clamp-3">{post?.title}</h4>
            </div>
            <div className="post_exercpt line-clamp-2 text-white dark:text-white" dangerouslySetInnerHTML={{ __html: post?.excerpt ?? "" }} />
        </div>
    </div>
</Link>

const TagDetailsPage: React.FC<{ params: { tagSlug: string, limit: string } }> = async ({ params }) => {
    const posts = await getData(params.tagSlug, params.limit);
    return (
        <div className="tag_details_page">
            <div className="posts_list grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {posts && posts.map((post: PostCardProps, _i: number) => <PostItem key={post?.id} post={post} />)}
                {posts.length < 1 && <p>No post yet.</p>}
            </div>
        </div>
    );
}

export default TagDetailsPage;
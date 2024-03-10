import React, { Key } from "react";
import Link from "next/link";
import Image from "next/image";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getPostsByCategory from "@/_lib/graphQl/queries/getPostsByCategory";
import formatDate from "@/_lib/helpers/formatPostDate";
import PostCardProps from "@/_lib/models/PostCardProps";
import AuthorAvatarNameLink from "@/components/common/AuthorAvatarNameLink";

const getData = async (category: string) => {
    // Construct the query and variables
    const query = getPostsByCategory();
    const variables = { category: category, limit: 3 };
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

const PostItem: React.FC<{ post: PostCardProps }> = ({ post }) => (
    <div className="post_item flex flex-col shadow-md justify-between">
        <div className="post_image">
            <Image
                alt={post?.featuredImage?.node?.altText}
                src={post?.featuredImage?.node?.sourceUrl}
                width={288}
                height={250}
            />
        </div>
        <div className="post_data px-4 pb-4">
            <div className="post_date mt-7 text-[#999]">
                {formatDate(post?.date, "numeric")}
            </div>
            <div className="post_title mt-1 line-clamp-2">
                <Link href={post?.slug} title={post?.title}>
                    <div className="capitalize text-[#444] dark:text-white text-lg font-normal leading-tight hover:text-[#43A047] transition ease-in-out duration-300 dark:hover:text-[#43A047]">
                        {post?.title}
                    </div>
                </Link>
            </div>
            <div className="post_author flex items-center mt-4 space-x-4">
                <AuthorAvatarNameLink
                    imgAlt={post?.author?.node?.name}
                    imgSrc={post?.author?.node?.avatar?.url}
                    link={post?.author?.node?.slug}
                    name={post?.author?.node?.name}
                    textColor={"text-[#666]"}
                    imgSize={40}
                />
            </div>
        </div>
    </div>
);

const PostRelatedPosts: React.FC<{ category: string }> = async ({ category }) => {
    const posts = await getData(category);
    return (
        <div className="related_posts">
            <h3 className="capitalize font-medium text-[#000] dark:text-white">related posts</h3>
            <div className="posts grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post: any, i: Key) => (
                    <PostItem key={i} post={post} />
                ))}
            </div>
        </div>
    );
};

export default PostRelatedPosts;
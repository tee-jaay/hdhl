import React from "react";
import Image from "next/image";

import PostCardProps from "@/_lib/models/PostCardProps";
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getUserBySlug from "@/_lib/graphQl/queries/getUserBySlug";
import formatDate from "@/_lib/helpers/formatPostDate";
import PublishMonthDateYear from "@/components/common/PublishMonthDateYear";
import CommentsCount from "@/components/common/CommentsCount";
import PostTitle from "@/components/common/blog/posts/PostTitle";
import ReadMore from "@/components/common/blog/posts/ReadMore";

const getData = async (authorSlug: string) => {
    // Construct the query and variables
    const query = getUserBySlug();
    // Convert the limit to an integer
    const variables = { id: authorSlug, };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data?.user;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const PostSingleCard: React.FC<{ post: PostCardProps }> = ({ post }) => <div className="post_single shadow-md pb-8 dark:text-white">
    <div className="post_image">
        <Image src={post?.featuredImage?.node?.sourceUrl} alt={post?.featuredImage?.node?.altText} height={600} width={1200} />
    </div>
    <div className="post_meta px-6">
        <div className="meta flex space-x-6 mt-6 mb-4">
            <PublishMonthDateYear color="text-[#777]" dateMDY={formatDate(post?.date, "numeric")} />
            <CommentsCount color="text-[#777]" count={post?.commentCount ? post.commentCount.toString() : "0"} />
        </div>
        <PostTitle title={post?.title} />
        <div className="post_excerpt text-[#777] dark:text-white" dangerouslySetInnerHTML={{ __html: post?.excerpt ?? "" }} />
        <ReadMore slug={post?.slug} />
    </div>
</div>

const Author: React.FC<{ params: { authorSlug: string } }> = async ({ params }) => {
    const user = await getData(params.authorSlug);
    return (
        <div className="phone:space-y-8 tab:space-y-12 laptop:space-y-16">
            {user?.posts?.nodes.map((post: PostCardProps, _id: number) => <PostSingleCard key={post.id} post={post} />)}
            {user?.posts.length < 1 && <p>No published post yet.</p>}
        </div>
    );
}

export default Author;
import React from "react";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getPostBySlug from "@/_lib/graphQl/queries/getPostBySlug";
import PostDetails from "@/components/blog/post/PostDetails";
import PostTags from "@/components/blog/post/PostTags";
import PostAuthor from "@/components/blog/post/PostAuthor";
import PostSocialShareLinks from "@/components/blog/post/PostSocialShareLinks";
import PostPagination from "@/components/blog/post/PostPagination";
import PostRelatedPosts from "@/components/blog/post/PostRelatedPosts";
import PostComments from "@/components/blog/post/PostComments";

type Props = { params: { slug: string }, }

export async function generateMetadata(params: Props) {
    const { slug } = params?.params;
    // Construct the query and variables
    const query = getPostBySlug();
    const variables = { slug: slug };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return {
            title: `${process.env.APP_NAME} | ${data?.post?.seo?.title}`,
            description: data?.post?.seo?.metaDesc,
            alternates: {
                canonical: data?.post?.slug
            },
        };
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const getData = async (params: string) => {
    // Construct the query and variables
    const query = getPostBySlug();
    const variables = {
        slug: params,
    };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const Post: React.FC<{ params: { slug: string } }> = async ({ params }) => {
    const { post } = await getData(params.slug);
    return (
        <div className="flex flex-col">
            <PostDetails data={post?.content} image={post?.featuredImage} />
            <hr className="mt-10 mb-6" />
            <div className="tags_share_links flex justify-between">
                <div className="tags w-3/5">
                    <PostTags tags={post?.tags?.nodes} />
                </div>
                <div className="w-2/5">
                    <PostSocialShareLinks imgSrc={post?.featuredImage?.node?.sourceUrl} slug={post?.slug} title={post?.title} />
                </div>
            </div>
            <PostAuthor author={post?.author?.node} />
            <PostPagination postId={post?.postId} />
            <PostRelatedPosts category={post?.categories?.nodes[0]?.name} />
            <PostComments postId={post?.databaseId} comments={post?.comments?.nodes} />
        </div>
    );
}

export default Post;
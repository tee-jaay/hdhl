import Link from "next/link";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getPostBySlug from "@/_lib/graphQl/queries/getPostBySlug";
import PostDetails from "@/components/blog/post/PostDetails";
import PostTags from "@/components/blog/post/PostTags";
import PostAuthor from "@/components/blog/post/PostAuthor";
import PostSocialShareLinks from "@/components/blog/post/PostSocialShareLinks";


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

const Post = async ({ params }: { params: { slug: string } }) => {
    const { post } = await getData(params.slug);
    return (
        <div className="flex flex-col">
            <PostDetails data={post?.content} image={post?.featuredImage} />
            <hr className="mt-10 mb-6" />
            <div className="tags_share_links flex justify-between">
                <div className="tags flex">
                    <h6 className="font-medium mr-4 text-lg text-[#444444]">Tags:</h6>
                    <PostTags tags={post?.tags?.nodes} />
                </div>
                <div className="flex flex-col">
                    <PostSocialShareLinks />
                </div>
            </div>
            <PostAuthor author={post?.author?.node} />
            <div className="paginations flex justify-between mt-8">
                <Link href={"/"}>
                    <div className="prev_post_link">
                        <div className="flex space-x-2 align-middle">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                            </div>
                            <div className="capitalize text-gray-400 text-xl font-light">previous post</div>
                        </div>
                        <div>
                            <h4 className="font-medium capitalize pl-6 text-[#444] hover:text-[#4ce5a2] transition ease-in-out duration-300">post title 123</h4>
                        </div>
                    </div>
                </Link>
                <Link href={"/"}>
                    <div className="next_post_link">
                        <div className="flex space-x-2 align-middle justify-end">
                            <div className="capitalize text-gray-400 text-xl font-light">next post</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-medium capitalize pr-6 text-[#444] hover:text-[#4ce5a2] transition ease-in-out duration-300">post title 123</h4>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="related_posts">
                related posts
            </div>
            <div className="comments">
                <div className="comments_list">
                    comments
                </div>
                <div className="comment_form">Leave a Comment</div>
            </div>
        </div>
    );
}

export default Post;
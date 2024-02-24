import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getPostBySlug from "@/_lib/graphQl/queries/getPostBySlug";
import PostDetails from "@/components/blog/post/PostDetails";
import PostTags from "@/components/blog/post/PostTags";
import PostAuthor from "@/components/blog/post/PostAuthor";
import PostSocialShareLinks from "@/components/blog/post/PostSocialShareLinks";
import PostPagination from "@/components/blog/post/PostPagination";
import PostRelatedPosts from "@/components/blog/post/PostRelatedPosts";
import PostComments from "@/components/blog/post/PostComments";

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
            <PostPagination />
            <PostRelatedPosts category={post?.categories?.nodes[0]?.name} />
            <PostComments comments={post?.comments?.nodes} />
        </div>
    );
}

export default Post;
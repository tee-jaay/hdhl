import Link from "next/link";
import Image from "next/image";

import PostCardProps from "@/_models/PostCardProps";
import formatDate from "@/_helpers/formatPostDate";
import getLatestPosts from "@/_lib/graphQl/queries/getLatestPosts";
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import AuthorAvatarNameLink from "@/components/common/AuthorAvatarNameLink";
import CommentsCount from "@/components/common/CommentsCount";
import PublishMonthDateYear from "@/components/common/PublishMonthDateYear";

const getData = async () => {
    // Construct the query and variables
    const query = getLatestPosts();
    const variables = { limit: 12, };
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

const PostSingleCard = ({ post }: { post: PostCardProps }) => <div className="post_single shadow-md pb-8">
    <div className="post_image">
        <Image src={post?.featuredImage?.node?.sourceUrl} alt={post?.featuredImage?.node?.altText} height={600} width={1200} />
    </div>
    <div className="post_meta px-6">
        <div className="meta flex space-x-6 my-8">
            <AuthorAvatarNameLink imgAlt={post?.author?.node?.name} imgSrc={post?.author?.node?.avatar?.url} link={post?.author?.node?.slug} name={post?.author?.node?.name} textColor={"text-[#000]"} imgSize={30} />
            <PublishMonthDateYear color="text-[#777]" dateMDY={formatDate(post?.date, "numeric")} />
            <CommentsCount color="text-[#777]" count={post?.commentCount ? post.commentCount.toString() : "0"} />
        </div>
        <h1 className="post_title font-medium text-4xl">
            {post?.title}
        </h1>
        <div className="post_excerpt text-[#777]" dangerouslySetInnerHTML={{ __html: post?.excerpt ?? "" }} />
        <div className="post_read_more mt-7">
            <Link href={post?.slug} className="capitalize text-[#000] border border-[#e2e2e2] py-2 px-7 hover:text-[#4ce5a2] hover:border-[#4ce5a2] transition ease-in-out duration-300">read more</Link>
        </div>
    </div>
</div>

const Blog = async () => {
    const posts = await getData();
    return (
        <div className="posts_container">
            <div className="posts_list space-y-9">
                {posts && posts.map((post: PostCardProps, _id: number) => <PostSingleCard key={post.id} post={post} />)}
                {posts.length < 1 && <p>No published post yet.</p>}
            </div>
            <div className="paginations mt-8 flex space-x-2">
                <div className="pagination_item text-[#444] cursor-pointer border font-medium text-sm flex items-center justify-center w-8 h-7 hover:text-[#4ce5a2] hover:border-[#4ce5a2] transition ease-in-out duration-300">1</div>
                <div className="pagination_item text-[#444] cursor-pointer border font-medium text-sm flex items-center justify-center w-8 h-7 hover:text-[#4ce5a2] hover:border-[#4ce5a2] transition ease-in-out duration-300">2</div>
                <div className="pagination_item text-[#444] cursor-pointer border font-medium text-sm flex items-center justify-center w-8 h-7 hover:text-[#4ce5a2] hover:border-[#4ce5a2] transition ease-in-out duration-300">3</div>
                <div className="pagination_item text-[#444] cursor-pointer border font-medium text-sm flex items-center justify-center w-8 h-7 hover:text-[#4ce5a2] hover:border-[#4ce5a2] transition ease-in-out duration-300">4</div>
                <div className="pagination_item text-[#444] cursor-pointer border font-medium text-sm flex items-center justify-center w-8 h-7 hover:text-[#4ce5a2] hover:border-[#4ce5a2] transition ease-in-out duration-300">5</div>
                <div className="pagination_item text-[#444] cursor-pointer border font-medium text-sm flex items-center justify-center w-14 h-7 capitalize hover:text-[#4ce5a2] hover:border-[#4ce5a2] transition ease-in-out duration-300">next</div>
            </div>
        </div>
    );
}

export default Blog;
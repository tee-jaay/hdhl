import Image from "next/image";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getUserBySlug from "@/_lib/graphQl/queries/getUserBySlug";
import PostCardProps from "@/_models/PostCardProps";
import PublishMonthDateYear from "@/components/common/PublishMonthDateYear";
import CommentsCount from "@/components/common/CommentsCount";
import formatDate from "@/_helpers/formatPostDate";
import Link from "next/link";

const getData = async (authorSlug: string) => {
    // Construct the query and variables
    const query = getUserBySlug();
    // Convert the limit to an integer
    const variables = {
        id: authorSlug,
    };
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

const PostSingleCard = ({ post }: { post: PostCardProps }) => <div className="post_single shadow-md pb-8">
    <div className="post_image">
        <Image src={post?.featuredImage?.node?.sourceUrl} alt={post?.featuredImage?.node?.altText} height={600} width={1200} />
    </div>
    <div className="post_meta px-6">
        <div className="meta flex space-x-6 mt-6 mb-4">
            <PublishMonthDateYear color="text-[#777]" dateMDY={formatDate(post?.date, "numeric")} />
            <CommentsCount color="text-[#777]" count={post?.commentCount ? post.commentCount.toString() : "0"} />
        </div>
        <h1 className="post_title font-medium text-4xl">
            {post?.title}
        </h1>
        <div className="post_excerpt text-[#777]" dangerouslySetInnerHTML={{ __html: post?.excerpt ?? "" }} />
        <div className="post_read_more mt-7">
            <Link href={`/${post?.slug}`} className="capitalize text-[#000] border border-[#999] py-2 px-7 hover:text-[#4ce5a2] hover:border-[#4ce5a2] transition ease-in-out duration-300">read more</Link>
        </div>
    </div>
</div>

const Author = async ({ params }: { params: { authorSlug: string } }) => {
    const user = await getData(params.authorSlug);
    return (
        <div className="posts_list space-y-9">
            {user?.posts?.nodes.map((post: PostCardProps, _id: number) => <PostSingleCard key={post.id} post={post} />)}
            {user?.posts.length < 1 && <p>No published post yet.</p>}
        </div>
    );
}

export default Author;
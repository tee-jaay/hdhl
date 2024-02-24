import Link from "next/link";
import Image from "next/image";

import AuthorAvatarNameLink from "@/components/common/AuthorAvatarNameLink";
import CommentsCount from "@/components/common/CommentsCount";
import PublishMonthDateYear from "@/components/common/PublishMonthDateYear";
import getLatestPosts from "@/_lib/graphQl/queries/getLatestPosts";
import gqlQuery from "@/_lib/graphQl/gqlQuery";

const getData = async () => {
    // Construct the query and variables
    const query = getLatestPosts();
    const variables = {
        limit: 12,
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

interface Category {
    name: string,
    slug: string
}

interface Post {
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
            avatar: {
                url: string
            }
        }
    },
    categories: {
        nodes: Category[]
    },
    commentCount: number,
    date: string
}


const PostSingleCard = ({ post }: { post: Post }) => <div className="post_single">
    <div className="post_image">
        <Image src={"https://picsum.photos/1200/600"} alt="" height={600} width={1200} />
    </div>
    <div className="post_meta">
        <div className="meta flex space-x-6 my-8">
            <AuthorAvatarNameLink imgAlt={"alt"} imgSrc={"https://i.pravatar.cc/30"} link={"john-doe"} name={"John Doe"} textColor={"text-[#000]"} imgSize={30} />
            <PublishMonthDateYear color="text-[#777]" dateMDY={"October 10, 2024"} />
            <CommentsCount color="text-[#777]" count={"5"} />
        </div>
        <h1 className="post_title font-medium text-4xl">
            {post?.title}
        </h1>
        <div className="post_excerpt text-[#777]" dangerouslySetInnerHTML={{ __html: post?.excerpt ?? "" }} />
        <div className="post_read_more mt-7 mb-11">
            <Link href={post?.slug} className="capitalize text-[#000] border border-[#999] py-2 px-7 hover:text-[#4ce5a2] hover:border-[#4ce5a2] transition ease-in-out duration-300">read more</Link>
        </div>
        <hr />
    </div>
</div>

const Blog = async () => {
    const posts = await getData();
    return (
        <div className="posts_list space-y-9">
            {posts && posts.map((post: Post, _id: number) => <PostSingleCard key={post.id} post={post} />)}
            {posts.length < 1 && <p>No published post yet.</p>}
        </div>
    );
}

export default Blog;
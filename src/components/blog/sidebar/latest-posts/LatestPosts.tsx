import Link from "next/link";
import Image from "next/image";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getLatestPosts from "@/_lib/graphQl/queries/getLatestPosts";
import CategoryNameSlug from "@/components/common/CategoryNameSlug";

const getData = async () => {
    // Construct the query and variables
    const query = getLatestPosts();
    const variables = {
        limit: 4,
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
    slug: string,
}

interface Post {
    id: string,
    title: string,
    slug: string,
    featuredImage: {
        node: {
            sourceUrl: string,
            altText: string
        }
    },
    author: {
        node: {
            name: string,
        }
    },
    categories: {
        nodes: Category[],
    },
}

const PostCard = ({ post }: { post: Post }) => <div className="flex space-x-4">
    <div className="post_image w-1/4">
        <Link href={post?.slug}>
            <Image src={post?.featuredImage?.node?.sourceUrl} alt={post?.featuredImage?.node?.altText} width={100} height={100} />
        </Link>
    </div>
    <div className="flex flex-col post_meta w-3/4">
        <div className="post_category">
            <CategoryNameSlug color={"text-[#999]"} name={post?.categories?.nodes[0]?.name} slug={post?.categories?.nodes[0]?.slug} />
        </div>
        <div className="post_title">
            <Link href={"/"}>
                <h5 className="text-[#222] line-clamp-1">{post?.title}</h5>
            </Link>
        </div>
        <div className="post_author text-[#666]">
            by <span className="text-[#222]">{post?.author?.node?.name}</span>
        </div>
    </div>
</div>

const LatestPosts = async () => {
    const posts = await getData();
    return (
        <div className="mt-10">
            <h4 className="capitalize font-medium">latest posts</h4>
            <div className="latest_posts mt-3 space-y-6">
                {posts && posts.map((post: Post, _i: number) => <PostCard key={post?.id} post={post} />)}
                {posts.length < 1 && <p>No published post yet.</p>}
            </div>
        </div>
    );
}

export default LatestPosts;
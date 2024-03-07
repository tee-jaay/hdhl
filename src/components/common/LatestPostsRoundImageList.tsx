import Link from "next/link";
import Image from "next/image";
import CategoryNameSlug from "./CategoryNameSlug";

interface FeaturedImage {
    node: {
        sourceUrl: string,
        altText: string,
    }
}
interface Category {
    nodes: {
        name: string,
        slug: string,
    }[];
}
interface Post {
    id: number,
    title: string,
    slug: string,
    categories: Category,
    featuredImage: FeaturedImage,
}

const LatestPostsRoundImageList = ({ posts }: { posts: Post[] }) => {
    return (
        <div className="space-y-6">
            {posts && posts.map((post, _i) => (
                <div key={post.id} className="flex space-x-3">
                    <div className="flex-1/5">
                        <div className="w-24 h-24">
                            <Image
                                className="rounded-full"
                                src={post.featuredImage?.node?.sourceUrl}
                                alt={post.featuredImage?.node?.altText}
                                height={100}
                                width={100} />
                        </div>
                    </div>
                    <div className="4/5">
                        <CategoryNameSlug
                            color={"text-[#919191]"}
                            name={post?.categories?.nodes[0]?.name ?? ""}
                            slug={post?.categories?.nodes[0]?.slug ?? ""}
                        />
                        <h5 className="mt-2">
                            <Link title={post?.title} href={post?.slug}>
                                <div className="text-[#444] dark:text-white leading-snug line-clamp-2 hover:text-[#43A047] transition ease-in-out duration-300">
                                    {post?.title}
                                </div>
                            </Link>
                        </h5>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LatestPostsRoundImageList;
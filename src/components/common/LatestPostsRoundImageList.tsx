import React from "react";
import Link from "next/link";
import Image from "next/image";

import PostCardProps from "@/_lib/models/PostCardProps";
import CategoryNameSlug from "./CategoryNameSlug";

const LatestPostsRoundImageList: React.FC<{ posts: PostCardProps[] }> = ({ posts }) => {
    return (
        <div className="phone:space-y-8 space-y-6">
            {posts && posts.map((post, _i) => (
                <div key={post.id} className="flex phone:space-x-4 laptop:space-x-6">
                    <div className="w-1/4">
                        <div className="laptop:w-16 laptop:h-16 desktop:w-24 desktop:h-24">
                            <Image
                                className="rounded-full"
                                src={post.featuredImage?.node?.sourceUrl}
                                alt={post.featuredImage?.node?.altText}
                                height={100}
                                width={100} />
                        </div>
                    </div>
                    <div className="w-3/4 phone:space-y-4">
                        <CategoryNameSlug
                            bgColor=""
                            count={0}
                            id=""
                            imgSrc=""
                            color={"text-[#919191]"}
                            name={post?.categories?.nodes[0]?.name ?? ""}
                            slug={post?.categories?.nodes[0]?.slug ?? ""}
                        />
                        <h5 className="mt-2">
                            <Link title={post?.title} href={post?.slug}>
                                <div className="text-[#222] phone:text-base tab:text-lg dark:text-white leading-snug phone:line-clamp-1 tab:line-clamp-1 laptop:line-clamp-2 desktop:line-clamp-2 hover:text-[#43A047] transition ease-in-out duration-200 dark:hover:text-[#43A047]">
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
import React from "react";
import Link from "next/link";
import Image from "next/image";

import CategoryNameSlug from "./CategoryNameSlug";
import PostRoundItemProps from "@/_lib/models/PostRoundItemProps";

const posts: PostRoundItemProps[] = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        slug: "lorem-ipsum-dolor-sit-amet",
        category: "Technology",
        categorySlug: "technology",
        image: "https://picsum.photos/100?random=1",
    },
    {
        id: 2,
        title: "Consectetur adipiscing elit",
        slug: "consectetur-adipiscing-elit",
        category: "Travel",
        categorySlug: "travel",
        image: "https://picsum.photos/100?random=2",
    },
    {
        id: 3,
        title: "Sed do eiusmod tempor",
        slug: "sed-do-eiusmod-tempor-incididunt",
        category: "Politics",
        categorySlug: "politics",
        image: "https://picsum.photos/100?random=3",
    },
    {
        id: 4,
        title: "Ut labore et dolore",
        slug: "ut-labore-et-dolore-magna-aliqua",
        category: "Sports",
        categorySlug: "sports",
        image: "https://picsum.photos/100?random=4",
    },
];

const RoundImageCategoryTitle: React.FC<{}> = () => {
    return (
        <div className="space-y-6">
            {posts && posts.map((post, _i) => (
                <div key={post.id} className="flex space-x-3">
                    <div className="w-2/5">
                        <div className="w-full laptop:h-fit desktop:h-24">
                            <Image className="w-full" src={post.image} alt="" height={100} width={100} />
                        </div>
                    </div>
                    <div className="w-3/5 ">
                        <CategoryNameSlug color={"text-[#919191]"} name={post.category} slug={post.categorySlug} bgColor="" count={0} id="" imgSrc="" />
                        <h4 className="mt-2 laptop:text-base desktop:text-xl laptop:font-normal line-clamp-2">
                            <Link className="text-[#222] dark:text-white hover:text-[#43A047] transition ease-in-out duration-200" title={post.title} href={post.slug}>{post.title}</Link>
                        </h4>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RoundImageCategoryTitle;
import React from "react";
import Link from "next/link";

import TagProps from "@/_lib/models/TagProps";
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getPostsByTag from "@/_lib/graphQl/queries/getPostsByTag";

const getData = async (params: string) => {
    // Construct the query and variables
    const query = getPostsByTag();
    const variables = { tag: params, first: 12 };
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

const TagHeaderSection: React.FC<{ slug: string }> = async ({ slug }) => {
    const posts = await getData(slug);
    const filteredTags = posts[0]?.tags?.nodes.filter((item: TagProps) => item.slug === slug);
    return (
        <div className="blog_header bg-[#FBFAFA] py-16 dark:bg-[#333] w-full">
            <h2 className="tab:w-[640px] laptop:w-[768px] desktop:w-full mx-auto capitalize text-[#222] dark:text-white text-center tab:text-2xl laptop:text-3xl desktop:text-4xl font-medium tracking-wide">{filteredTags[0]?.name}</h2>
            <h6 className="text-[#8F8E8E] dark:text-white text-lg flex justify-center items-center">
                <Link href={"/"}>
                    Home
                </Link> <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span className="capitalize">
                    <Link href={"/blog"}>
                        Blog
                    </Link>
                </span>
            </h6>
        </div>
    );
}

export default TagHeaderSection;
import React from "react";
import Link from "next/link";

import getPostBySlug from "@/_lib/graphQl/queries/getPostBySlug";
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import formatDate from "@/_lib/helpers/formatPostDate";

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

const PostHeaderSection: React.FC<{ slug: string }> = async ({ slug }) => {
    const { post } = await getData(slug);
    return (
        <div className="blog_header py-16 bg-[#FBFAFA] dark:bg-[#333] w-full">
            <h2 className="w-full mx-auto text-[#222] dark:text-white text-center tab:text-2xl laptop:text-3xl desktop:text-4xl font-medium tracking-wide tab:line-clamp-2 laptop:line-clamp-1">{post?.title}</h2>
            <h5 className="text-center font-thin text-base text-[#222] dark:text-white">{formatDate(post?.date, "numeric")}</h5>
            <h6 className="text-[#8F8E8E] dark:text-[#FEFEFE] text-lg flex justify-center items-center capitalize mt-2">
                <Link href={"/"}>home</Link>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <Link href={"/blog"}>
                    blog
                </Link> <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <Link className="capitalize" href={`/categories/${post?.categories?.nodes[0]?.slug}/12`}>{post?.categories?.nodes[0]?.name}</Link>
            </h6>
        </div>
    );
}

export default PostHeaderSection;
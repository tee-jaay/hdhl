import React from "react";
import Link from "next/link";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getCategoryBySlug from "@/_lib/graphQl/queries/getCategoryBySlug";

const getData = async (params: string) => {
    // Construct the query and variables
    const query = getCategoryBySlug();
    const variables = { slug: params };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data?.category;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const CategoryHeaderSection: React.FC<{ slug: string }> = async ({ slug }) => {
    const category = await getData(slug);
    return (
        <div className="blog_header py-16 bg-[#FBFAFA] dark:bg-[#333] w-full">
            <h2 className="tab:w-[640px] laptop:w-[768px] desktop:w-full mx-auto capitalize text-[#222] dark:text-white text-center  tab:text-2xl laptop:text-3xl desktop:text-4xl font-medium tracking-wide">{category?.name}</h2>
            <h6 className="text-[#8F8E8E] dark:text-white text-lg flex justify-center items-center">
                <Link href="/">
                    Home
                </Link> <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span className="capitalize">Category</span>
            </h6>
            <p className="tab:w-[640px] laptop:w-[768px] desktop:w-full mx-auto dark:text-white mt-8 text-center">{category?.description}</p>
        </div>
    );
}

export default CategoryHeaderSection;
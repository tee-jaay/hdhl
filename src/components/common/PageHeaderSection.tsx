import React from "react";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import GetPageDetailsByUri from "@/_lib/graphQl/queries/getPageDetailsByUri";

const getData = async (uri: string) => {
    // Construct the query and variables
    const query = GetPageDetailsByUri();
    const variables = { id: uri };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data?.page;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const PageHeaderSection: React.FC<{ slug: string, title: string }> = async ({ slug, title }) => {
    const page = await getData(slug);
    return (
        <div className="page_header bg-[#FBFAFA] dark:bg-[#333] w-full py-16">
            <h2 className="tab:w-[640px] laptop:w-[768px] desktop:w-full mx-auto capitalize text-[#222] dark:text-white text-center laptop:text-2xl desktop:text-3xl font-medium tracking-wide">{page?.title ? page?.title : title}</h2>
            <h6 className="text-[#8F8E8E] dark:text-white text-lg flex justify-center items-center">
                Home <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span className="capitalize">{page?.title ? page?.title : title}</span>
            </h6>
        </div>
    );
}

export default PageHeaderSection;
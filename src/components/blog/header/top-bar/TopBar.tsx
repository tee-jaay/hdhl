import React from "react";
import Link from "next/link";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getLatestPosts from "@/_lib/graphQl/queries/getLatestPosts";
import SearchOptions from "./search-options/SearchOptions";

const getData = async () => {
    // Construct the query and variables
    const query = getLatestPosts();
    const variables = { limit: 1, startCursor: "", endCursor: "" };
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

const TopBar: React.FC<{}> = async () => {
    const data = await getData();
    return (
        <section className="topbar bg-gradient-to-b from-[#2E8B57] to-[#43A047]">
            <div className="w-[1024px] flex justify-between mx-auto">
                <div className="latest_news w-2/3 flex justify-start">
                    <div className="flex items-center">
                        <span className="text-sm text-white uppercase">latest article</span>
                        <span className="text-sm text-white uppercase mx-2">|</span>
                    </div>
                    <span className="w-4/6 text-sm text-white font-normal flex items-center justify-start">
                        <Link href={`/${data[0]?.slug}`} className="line-clamp-1 text-gray-300 hover:text-white transition ease-in-out duration-300">
                            {data[0]?.title}
                        </Link>
                    </span>
                </div>
                <div className="w-1/3 flex justify-end">
                    <SearchOptions />
                </div>
            </div>
        </section>
    );
}

export default TopBar;
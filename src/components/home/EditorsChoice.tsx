import React from "react";
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getPostsByTag from "@/_lib/graphQl/queries/getPostsByTag";
import SectionHeading from "../common/SectionHeading";
import PostsList from "./editors-choice/PostsList";
import CatgoriesGrid from "./editors-choice/CatgoriesGrid";
import RoundImageCategoryTitle from "../common/RoundImageCategoryTitle";
import FollowUs from "./editors-choice/FollowUs";

const getData = async () => {
    // Construct the query and variables
    const query = getPostsByTag();
    const variables = {
        tag: "recommended",
        first: 6,
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

const EditorsChoice: React.FC = async () => {
    const data = await getData();

    return (
        <section className="mx-auto py-16 bg-[#FBF8F5] dark:bg-[#222]">
            <div className="laptop:w-[768px] desktop:w-[1024px] mx-auto">
                <div className="flex tab:flex-col laptop:flex-row tab:space-x-8 align-baseline">
                    <div className="phone:hidden tab:block tab:w-full laptop:w-3/4">
                        <SectionHeading text="Editor's Choice" color="text-[#222]" />
                        <PostsList posts={data} />
                    </div>
                    <div className="phone:w-full phone:px-2 tab:px-0 laptop:w-1/4">
                        <CatgoriesGrid />
                        <div className="most_reads">
                            <h4 className="tab:text-2xl mt-10 mb-6 dark:text-white">Most Reads</h4>
                            <RoundImageCategoryTitle />
                        </div>
                        <div className="follow_us">
                            <h4 className="laptop:text-xl desktop:text-2xl mt-10 my-6 dark:text-white">Follow Us</h4>
                            <FollowUs />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditorsChoice;
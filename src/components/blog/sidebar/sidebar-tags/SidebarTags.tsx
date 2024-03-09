import React from "react";
import Link from "next/link";

import TagProps from "@/_lib/models/TagProps";
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getTagsList from "@/_lib/graphQl/queries/getTagsList";
import SectionHeading from "../SectionHeading";

const getData = async () => {
    // Construct the query and variables
    const query = getTagsList();
    const variables = { first: 100, };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        const randomTags = data?.tags?.nodes.sort(() => Math.random() - 0.5).slice(0, 18);
        return randomTags;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const TagSingle: React.FC<{ tag: TagProps }> = ({ tag }) =>
    <Link key={tag.id} href={`/tags/${tag.slug}/12`} title={tag.name} className="tag uppercase truncate font-light text-xs py-1 px-2 bg-[#FFF] dark:bg-[#444] text-[#555] dark:text-[#FEFEFE] shadow-sm hover:text-[#43A047] transition ease-in-out duration-300">
        <span>
            {tag.name}
        </span>
    </Link>

const SidebarTags: React.FC = async () => {
    const tags = await getData();
    return (
        <div>
            <SectionHeading headingProps={{ text: "tags" }} />
            <div className="tags_cloud mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {tags && tags.map((tag: TagProps, _i: number) => <TagSingle key={tag?.id} tag={tag} />)}
            </div>
        </div>
    );
}

export default SidebarTags;
import Link from "next/link";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getTagsList from "@/_lib/graphQl/queries/getTagsList";

const getData = async (limit: string) => {
    // Construct the query and variables
    const query = getTagsList();
    // Convert the limit to an integer
    const parsedLimit = parseInt(limit, 10);
    const variables = {
        first: parsedLimit || 50,
    };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data?.tags?.nodes;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

interface TagProps {
    id: string,
    slug: string,
    name: string,
    count: number,
}

const TagItem = ({ tag }: { tag: TagProps }) => (
    <Link className="tag_item" href={`/tags/${tag?.slug}/12`}>
        <div className="flex items-center space-x-2 border border-gray-200 py-2 px-4 mr-4 capitalize">
            <div className="tag_name">{tag?.name}</div>
            <div className="tag_count bg-[#555] text-white px-2 py-1 rounded-full text-xs">{tag?.count}</div>
        </div>
    </Link>
);

const TagsPage = async () => {
    const tags = await getData("");
    return (
        <div className="tags_cloud flex flex-wrap space-y-4 items-baseline">
            {tags && tags.map((tag: TagProps, _i: number) => <TagItem key={tag?.id} tag={tag} />)}
        </div>
    );
};

export default TagsPage;
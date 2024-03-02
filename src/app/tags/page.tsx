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
        <div >
            <div className="blog_header py-16 bg-[#FBFAFA] w-full">
                <h2 className="text-[#000000] text-center text-4xl font-medium tracking-wide">Tag Cloud</h2>
                <h6 className="text-[#8F8E8E] text-lg flex justify-center items-center">
                    Home <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                    <span className="capitalize">blog</span>
                </h6>
            </div>
            <div className="w-[1024px] mx-auto tags_cloud flex flex-wrap space-y-4 items-baseline py-16 justify-center">
                {tags && tags.map((tag: TagProps, _i: number) => <TagItem key={tag?.id} tag={tag} />)}
            </div>
        </div>
    );
};

export default TagsPage;
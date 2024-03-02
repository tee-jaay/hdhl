import Link from "next/link";

import getPostBySlug from "@/_lib/graphQl/queries/getPostBySlug";
import gqlQuery from "@/_lib/graphQl/gqlQuery";

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

const PageHeaderSection = async ({ slug }: { slug: string }) => {
    const { post } = await getData(slug);
    return (
        <div className="blog_header py-16 bg-[#FBFAFA] w-full">
            <h2 className="w-[1024px] mx-auto text-[#000000] text-center text-3xl font-medium tracking-wide">{post?.title}</h2>
            <h6 className="text-[#8F8E8E] text-lg flex justify-center items-center">
                Home <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <Link className="capitalize" href={`/categories/${post?.categories?.nodes[0]?.slug}/12`}>{post?.categories?.nodes[0]?.name}</Link>
            </h6>
        </div>
    );
}

export default PageHeaderSection;
import Link from "next/link";

import React from "react";
import CategoryProps from "@/_lib/models/CategoryProps";
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getCategoriesByLimit from "@/_lib/graphQl/queries/getCategoriesByLimit";

const getData = async (limit: string) => {
    // Construct the query and variables
    const query = getCategoriesByLimit();
    // Convert the limit to an integer
    const parsedLimit = parseInt(limit, 10);
    const variables = {
        first: parsedLimit || 100,
    };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data?.categories?.nodes;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const CategoryItem: React.FC<{ category: CategoryProps }> = ({ category }) => <Link href={`/categories/${category?.slug}/12`} className="category_item">
    <div className="shadow-md  dark:shadow-gray-900 border-gray-300  px-4 h-56 flex flex-col items-center justify-center hover:text-[#43A047] transition ease-in-out duration-300">
        <div>
            <h6 className="text-5xl font-extralight dark:text-white">{category?.count ?? "0"}</h6>
        </div>
        <div>
            <h4 className="line-clamp-3 font-light text-center dark:text-white">{category?.name}</h4>
        </div>
    </div>
</Link>

const CategoriesPage: React.FC<{}> = async () => {
    const categories = await getData("");
    return (
        <div className="dark:bg-[#222222]">
            <div className="blog_header py-16 bg-[#FBFAFA] dark:bg-[#333] w-full">
                <h2 className="tab:w-[640px] laptop:w-[768px] desktop:w-full mx-auto  capitalize text-[#222] dark:text-white text-center tab:text-2xl laptop:text-3xl desktop:text-4xl font-medium tracking-wide">All Categories</h2>
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
                            blog
                        </Link>
                    </span>
                </h6>
            </div>
            <div className="tab:w-[640px] laptop:w-[768px] desktop:w-full mx-auto">
                <div className="categories_list grid laptop:grid-cols-3 desktop:grid-cols-4 gap-8 py-20">
                    {categories && categories.map((category: CategoryProps, _i: number) => <CategoryItem key={category?.id} category={category} />)}
                </div>
            </div>
        </div>
    );
}

export default CategoriesPage;
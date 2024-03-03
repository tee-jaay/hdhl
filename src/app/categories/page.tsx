import Link from "next/link";

import CategoryProps from "@/_models/CategoryProps";
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getCategoriesByLimit from "@/_lib/graphQl/queries/getCategoriesByLimit";

const getData = async (limit: string) => {
    // Construct the query and variables
    const query = getCategoriesByLimit();
    // Convert the limit to an integer
    const parsedLimit = parseInt(limit, 10);
    const variables = {
        first: parsedLimit || 20,
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

const CategoryItem = ({ category }: { category: CategoryProps }) => <Link href={`/categories/${category?.slug}/12`} className="category_item">
    <div className="shadow-md border-gray-300 px-4 h-56 flex flex-col items-center justify-center">
        <div>
            <h6 className="text-5xl font-extralight">{category?.count ?? "0"}</h6>
        </div>
        <div>
            <h4 className="line-clamp-3 font-light text-center">{category?.name}</h4>
        </div>
    </div>
</Link>

const CategoriesPage = async () => {
    const categories = await getData("");
    return (
        <div>
            <div className="blog_header py-16 bg-[#FBFAFA] w-full">
                <h2 className="w-[1024px] mx-auto capitalize text-[#000000] text-center text-4xl font-medium tracking-wide">All Categories</h2>
                <h6 className="text-[#8F8E8E] text-lg flex justify-center items-center">
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
            <div className="w-[1024px] mx-auto">
                <div className="categories_list grid grid-cols-4 gap-8 py-20">
                    {categories && categories.map((category: CategoryProps, _i: number) => <CategoryItem key={category?.id} category={category} />)}
                </div>
            </div>
        </div>
    );
}

export default CategoriesPage;
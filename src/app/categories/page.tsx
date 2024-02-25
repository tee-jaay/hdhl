import Link from "next/link";

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

interface CategoryProps {
    id: string,
    slug: string,
    name: string,
    count: number
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
        <div className="categories_list grid grid-cols-4 gap-8">
            {categories && categories.map((category: CategoryProps, _i: number) => <CategoryItem key={category?.id} category={category} />)}
        </div>
    );
}

export default CategoriesPage;
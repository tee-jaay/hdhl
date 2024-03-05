import Link from "next/link";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getCategoriesByLimit from "@/_lib/graphQl/queries/getCategoriesByLimit";

interface Category {
  id: number,
  name: string,
  slug: string,
  count: number,
  imgSrc: string
}

const getData = async () => {
  // Construct the query and variables
  const query = getCategoriesByLimit();
  const variables = {
    "first": 6,
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

const CatgoriesGrid = async () => {
  const categories: Category[] = await getData();

  return (
    <div className="categories w-full dark:text-white">
      <h4 className="text-2xl mb-7">Categories</h4>
      <div className="categories_block grid grid-cols-2 gap-x-8 gap-y-8">
        {categories && categories.map((category, i) => (
          <Link key={category.id} href={`/categories/${category.slug}/12`} title={category.name}>
            <div className="bg-no-repeat " style={{ backgroundImage: `url(https://picsum.photos/160/128?q=${i})` }}>
              <div className="flex flex-col w-36 h-32 px-1 justify-center text-center bg-gradient-to-b from-transparent to-black">
                <div className="text-white text-3xl font-extrabold">{category.count}</div>
                <div className="text-white uppercase text-sm font-normal tracking-wider">{category.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CatgoriesGrid;
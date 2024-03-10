import React from "react";
import Link from "next/link";

import CategoryProps from "@/_lib/models/CategoryProps";
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getCategoriesByLimit from "@/_lib/graphQl/queries/getCategoriesByLimit";

const getData = async () => {
  // Construct the query and variables
  const query = getCategoriesByLimit();
  const variables = { "first": 6, };
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

const CatgoriesGrid: React.FC = async () => {
  const categories: CategoryProps[] = await getData();

  return (
    <div className="categories w-full dark:text-white">
      <h4 className="text-2xl mb-7">Categories</h4>
      <div className="categories_block grid grid-cols-2 gap-x-4 gap-y-8">
        {categories && categories.map((category, i) => (
          <Link key={category.id} href={`/categories/${category.slug}/12`} title={category.name}>
            <div className="bg-no-repeat" style={{ backgroundImage: `url(https://picsum.photos/160/128?q=${i})` }}>
              <div className="flex flex-col w-full phone:h-24 laptop:h-24 desktop:h-32 justify-center text-center bg-gradient-to-b from-transparent to-black">
                <div className="text-white laptop:text-xl desktop:text-3xl font-extrabold">{category.count}</div>
                <div className="text-white line-clamp-1 uppercase phone:text-xs laptop:text-xs desktop:text-sm font-normal tracking-wider">{category.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CatgoriesGrid;
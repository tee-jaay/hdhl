import Link from "next/link";
import getCategoriesByLimit from "@/_lib/graphQl/queries/getCategoriesByLimit";

interface Category {
  id: number,
  name: string,
  slug: string,
  count: number,
  imgSrc: string
}

const categoriesByLimit = async () => {
  // Send the query to the GraphQL API
  const response = await fetch(`${process.env.GRAPHQL_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getCategoriesByLimit(),
      variables: {
        "first": 6
      },
    }),
  });

  // Parse the response body as JSON
  const data = await response.json();
  const { nodes } = data?.data?.categories;

  // Return the categories from the GraphQL API
  return new Response(JSON.stringify(nodes));
}

async function getData() {
  const res = await categoriesByLimit();

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = res.json();
  return data;
}

const CatgoriesGrid = async () => {
  const categories: Category[] = await getData();

  return (
    <div className="categories w-full">
      <h4 className="text-2xl mb-7">Categories</h4>
      <div className="categories_block grid grid-cols-2 gap-x-8 gap-y-8">
        {categories && categories.map((category, i) => (
          <Link key={category.id} href={`/categories/${category.slug}`} title={category.name}>
            <div className="w-36 h-32 px-1 flex flex-col justify-center text-center bg-no-repeat" style={{ backgroundImage: `url(https://picsum.photos/160/128?q=${i})` }}>
              <div className="text-white text-3xl font-extrabold">{category.count}</div>
              <div className="text-white uppercase text-sm font-normal tracking-wider">{category.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CatgoriesGrid;
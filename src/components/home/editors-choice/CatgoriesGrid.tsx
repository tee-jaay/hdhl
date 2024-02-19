import Link from "next/link";

interface Category {
  id: number,
  name: string,
  slug: string,
  count: number,
  imgSrc: string
}

const categories: Category[] = [
  {
    id: 1,
    name: "Health",
    slug: "health-and-fitness",
    count: 25,
    imgSrc: "https://picsum.photos/400?q=1"
  },
  {
    id: 2,
    name: "Nutrition",
    slug: "nutrition-and-diet",
    count: 18,
    imgSrc: "https://picsum.photos/400?q=2"
  },
  {
    id: 3,
    name: "Mental",
    slug: "mental-health",
    count: 15,
    imgSrc: "https://picsum.photos/400?q=3"
  },
  {
    id: 4,
    name: "Medicine",
    slug: "alternative-medicine",
    count: 22,
    imgSrc: "https://picsum.photos/400?q=4"
  },
  {
    id: 5,
    name: "Living",
    slug: "healthy-living",
    count: 10,
    imgSrc: "https://picsum.photos/400?q=5"
  },
  {
    id: 6,
    name: "Exercise",
    slug: "fitness-and-exercise",
    count: 14,
    imgSrc: "https://picsum.photos/400?q=6"
  },
];

const CatgoriesGrid = () => {
  return (
    <div className="categories">
      <h4 className="text-2xl mb-7">Categories</h4>
      <div className="categories_block grid grid-cols-2 gap-x-10 gap-y-4">
        {categories && categories.map((category, _i) => (
          <Link key={category.id} href={`/blog/categories/${category.slug}`} title={category.name}>
            <div className="p-10 w-40 h-32 flex flex-col items-center justify-center bg-no-repeat" style={{ backgroundImage: `url(${category.imgSrc})` }}>
              <div className="text-white text-3xl font-extrabold">{category.count}</div>
              <div className="text-white uppercase text-xl font-normal tracking-wider">{category.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CatgoriesGrid;
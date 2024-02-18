import Link from "next/link";

interface category {
    name: string,
    slug: string,
    color: string
}

const CategoryNameSlug = ({ name, slug, color }: category) => {
    return (
        <h5 className={`item-category uppercase ${color} text-sm tracking-wider`}>
            <Link href={`/blog/categories/${slug}`}>
                {name}
            </Link>
        </h5>
    );
}

export default CategoryNameSlug;
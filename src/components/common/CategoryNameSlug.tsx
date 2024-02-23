import Link from "next/link";

interface category {
    name: string,
    slug: string,
    color: string
}

const CategoryNameSlug = ({ name, slug, color }: category) => {
    return (
        <h5 className={`item-category line-clamp-1 uppercase ${color} text-sm tracking-wider`}>
            <Link href={`/categories/${slug}`} title={name}>
                {name}
            </Link>
        </h5>
    );
}

export default CategoryNameSlug;
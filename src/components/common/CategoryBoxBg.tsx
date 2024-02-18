import Link from 'next/link';

interface category {
    slug: string,
    name: string,
    bgColor: string
}

const CategoryBoxBg = ({ name, slug, bgColor }: category) => {
    return (
        <Link href={`/blog/categories/${slug}`} title={name}>
            <span className={`category ${bgColor} text-white px-3 py-1 max-w-max capitalize`}>{name}</span>
        </Link>
    );
}

export default CategoryBoxBg;
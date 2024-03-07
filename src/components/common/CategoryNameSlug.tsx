import React from "react";
import Link from "next/link";

import CategoryProps from "@/_lib/models/CategoryProps";

const CategoryNameSlug: React.FC<CategoryProps> = ({ name, slug, color }) => {
    return (
        <h5 className={`item-category line-clamp-1 uppercase ${color} text-sm tracking-wider`}>
            <Link href={`/categories/${slug}/12`} title={name}>
                {name}
            </Link>
        </h5>
    );
}

export default CategoryNameSlug;
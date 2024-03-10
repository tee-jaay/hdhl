import React from 'react';
import Link from 'next/link';

import CategoryProps from '@/_lib/models/CategoryProps';

const CategoryBoxBg: React.FC<CategoryProps> = ({ name, slug, bgColor }) => {
    return (
        <Link href={`/categories/${slug}/12`} title={name}>
            <span className={`category ${bgColor} text-white phone:px-1 tab:px-1 laptop:px-2 desktop:px-3 laptop:py-0 desktop:py-1 tab:min-w-max phone:w-fit laptop:w-fit capitalize line-clamp-1`}>{name}</span>
        </Link>
    );
}

export default CategoryBoxBg;
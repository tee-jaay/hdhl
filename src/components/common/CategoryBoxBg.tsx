import React from 'react';
import Link from 'next/link';

import CategoryProps from '@/_lib/models/CategoryProps';

const CategoryBoxBg: React.FC<CategoryProps> = ({ name, slug, bgColor }) => {
    return (
        <Link href={`/categories/${slug}/12`} title={name}>
            <span className={`category ${bgColor} text-white md:px-2 lg:px-3 md:py-0 lg:py-1 sm:min-w-max md:w-fit capitalize line-clamp-1`}>{name}</span>
        </Link>
    );
}

export default CategoryBoxBg;
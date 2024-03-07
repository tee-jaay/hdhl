import React from 'react';
import Link from 'next/link';

import CategoryProps from '@/_lib/models/CategoryProps';

const CategoryBoxBg: React.FC<CategoryProps> = ({ name, slug, bgColor }) => {
    return (
        <Link href={`/categories/${slug}/12`} title={name}>
            <span className={`category ${bgColor} text-white px-3 py-1 max-w-max capitalize`}>{name}</span>
        </Link>
    );
}

export default CategoryBoxBg;
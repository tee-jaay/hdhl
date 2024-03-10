import React from "react";
import Image from "next/image";
import Link from "next/link";

import CarouselItemProps from "@/_lib/models/CarouselItemProps";
import PublishMonthDateYear from "@/components/common/PublishMonthDateYear";
import CategoryNameSlug from "@/components/common/CategoryNameSlug";

const CarouselItem: React.FC<CarouselItemProps> = ({ imgSrc, imgAlt, category, categorySlug, title, slug, date }) => {
    return (
        <div className="item flex space-x-4">
            <div className="item-image w-1/3">
                <Image
                    alt={imgAlt}
                    src={imgSrc}
                    width={240}
                    height={320}
                    className="h-full"
                />
            </div>
            <div className="item-meta flex flex-col items-start justify-center w-2/3">
                <CategoryNameSlug bgColor="" count={0} id="" imgSrc="" color={"text-[#919191]"} name={category} slug={categorySlug} />
                <Link href={slug}>
                    <h5 className="item-title line-clamp-1 font-normal md:text-base lg:text-lg mt-2 mb-1 hover:text-[#43A047] transition ease-in-out duration-300">{title}</h5>
                </Link>
                <h6 className="item-date"><PublishMonthDateYear color={"text-[#919191]"} dateMDY={date} /></h6>
            </div>
        </div>
    );
}

export default CarouselItem;
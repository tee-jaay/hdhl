import Image from "next/image";
import Link from "next/link";
import PublishMonthDateYear from "@/components/common/PublishMonthDateYear";
import CategoryNameSlug from "@/components/common/CategoryNameSlug";

interface carouselItem {
    imgSrc: string,
    imgAlt: string,
    category: string,
    categorySlug: string,
    title: string,
    date: string,
}

const CarouselItem = ({ imgSrc, imgAlt, category, categorySlug, title, date }: carouselItem) => {
    return (
        <div className="item flex space-x-4">
            <div className="item-image">
                <Image
                    alt={imgAlt}
                    src={imgSrc}
                    width={140}
                    height={220}
                />
            </div>
            <div className="item-meta flex flex-col items-start justify-center">
                <CategoryNameSlug color={"text-[#919191]"} name={category} slug={categorySlug} />
                <Link href={"/post-slug"}>
                    <h4 className="item-title font-semibold mt-2 mb-1 hover:text-[#4ce5a2] transition ease-in-out duration-300">{title}</h4>
                </Link>
                <h6 className="item-date"><PublishMonthDateYear color={"text-[#919191]"} dateMDY={date} /></h6>
            </div>
        </div>
    );
}

export default CarouselItem;
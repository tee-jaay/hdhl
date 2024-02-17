import Image from "next/image";
import Link from "next/link";
import PublishMonthDateYear from "@/components/common/PublishMonthDateYear";

interface carouselItem {
    imgSrc: string,
    imgAlt: string,
    category: string,
    title: string,
    date: string
}

const CarouselItem = ({ imgSrc, imgAlt, category, title, date }: carouselItem) => {
    return (
        <Link href={"/"}>
            <div className="item flex space-x-4 px-4">
                <div className="item-image">
                    <Image
                        alt={imgAlt}
                        src={imgSrc}
                        width={140}
                        height={220}
                    />
                </div>
                <div className="item-meta flex flex-col items-start justify-center">
                    <h5 className="item-category uppercase text-[#919191] text-sm">{category}</h5>
                    <h4 className="item-title font-semibold my-2">{title}</h4>
                    <h6 className="item-date"><PublishMonthDateYear color="text-[#919191]" dateMDY="April 20, 2022" /></h6>
                </div>
            </div>
        </Link>
    );
}

export default CarouselItem;
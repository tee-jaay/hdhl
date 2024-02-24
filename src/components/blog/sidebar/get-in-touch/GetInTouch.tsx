import Link from "next/link";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faLinkedin, faVimeoSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons/faTwitterSquare";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const connectionItems = [
    {
        link: "/",
        icon: faFacebookSquare,
        color: "text-[#0866FF]",
        text: "followers",
        count: "5",
    },
    {
        link: "/",
        icon: faTwitterSquare,
        color: "text-[#46C7FF]",
        text: "fans",
        count: "51",
    },
    {
        link: "/",
        icon: faInstagramSquare,
        color: "text-[#FF3385]",
        text: "likes",
        count: "125",
    },
    {
        link: "/",
        icon: faVimeoSquare,
        color: "text-[#87D4FF]",
        text: "comments",
        count: "5",
    },
    {
        link: "/",
        icon: faLinkedin,
        color: "text-[#0E76A8]",
        text: "followers",
        count: "5",
    },
    {
        link: "/",
        icon: faYoutubeSquare,
        color: "#EF242B",
        text: "followers",
        count: "467",
    },
];

interface Item {
    link: string,
    icon: IconProp,
    color: string,
    text: string,
    count: string,
}

const ConnectionItem = ({ item }: { item: Item }) => <Link href={"/"} className="connection_item flex space-x-2 shadow-lg p-1">
    <div className="conenction_icon">
        <FontAwesomeIcon className={item?.color} icon={item?.icon} height={32} width={32} />
    </div>
    <div className="text_count text-[#222] text-xs">
        <div className="capitalize">{item?.text}</div>
        <div className="text-[#999]">{item?.count}</div>
    </div>
</Link>

const GetInTouch = () => {
    return (
        <div className="mt-10">
            <h4 className="capitalize font-medium">get in touch</h4>
            <div className="socials_connections mt-3 grid grid-cols-2 gap-x-5 gap-y-4">
                {connectionItems && connectionItems.map((item, i) => <ConnectionItem key={i} item={item} />)}
            </div>
        </div>
    );
}

export default GetInTouch;
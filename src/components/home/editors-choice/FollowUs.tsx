import React from "react";
import Link from "next/link";
import Image from "next/image";

import FollowUsSocialProps from "@/_lib/models/FollowUsSocialProps";

const socials: FollowUsSocialProps[] = [
    {
        id: 1,
        name: "Health",
        link: "/",
        imgSrc: "https://picsum.photos/300/200?q=1"
    },
    {
        id: 2,
        name: "Nutrition",
        link: "/",
        imgSrc: "https://picsum.photos/300/200?q=2"
    },
    {
        id: 3,
        name: "Mental",
        link: "/",
        imgSrc: "https://picsum.photos/300/200?q=3"
    },
    {
        id: 4,
        name: "Medicine",
        link: "/",
        imgSrc: "https://picsum.photos/300/200?q=4"
    },
];

const FollowUs: React.FC = () => {
    return (
        <div className="socials">
            <div className="socials_block grid tab:grid-cols-1 laptop:grid-cols-2 gap-3">
                {socials && socials.map((social, _i) => (
                    <Link key={social.id} href={social.link} title={social.name}>
                        <div className="social_item">
                            <Image
                                src={social.imgSrc}
                                alt={social.name}
                                width={300}
                                height={200}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default FollowUs;
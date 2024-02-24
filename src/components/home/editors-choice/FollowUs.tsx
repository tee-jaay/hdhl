import Link from "next/link";
import Image from "next/image";

interface Social {
    id: number,
    name: string,
    link: string,
    imgSrc: string
}

const socials: Social[] = [
    {
        id: 1,
        name: "Health",
        link: "https://www.example.com",
        imgSrc: "https://picsum.photos/300/200"
    },
    {
        id: 2,
        name: "Nutrition",
        link: "https://www.example.com",
        imgSrc: "https://picsum.photos/300/200"
    },
    {
        id: 3,
        name: "Mental",
        link: "https://www.example.com",
        imgSrc: "https://picsum.photos/300/200"
    },
    {
        id: 4,
        name: "Medicine",
        link: "https://www.example.com",
        imgSrc: "https://picsum.photos/300/200"
    },
];

const FollowUs = () => {
    return (
        <div className="socials">
            <div className="socials_block grid grid-cols-2 gap-3">
                {socials && socials.map((social, _i) => (
                    <Link key={social.id} href={social.link} title={social.name}>
                        <div className="social_item">
                            <Image
                                src={social.imgSrc}
                                alt=""
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
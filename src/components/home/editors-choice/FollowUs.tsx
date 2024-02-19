import Link from "next/link";

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
        imgSrc: "https://picsum.photos/400?q=1"
    },
    {
        id: 2,
        name: "Nutrition",
        link: "https://www.example.com",
        imgSrc: "https://picsum.photos/400?q=2"
    },
    {
        id: 3,
        name: "Mental",
        link: "https://www.example.com",
        imgSrc: "https://picsum.photos/400?q=3"
    },
    {
        id: 4,
        name: "Medicine",
        link: "https://www.example.com",
        imgSrc: "https://picsum.photos/400?q=4"
    },
];

const FollowUs = () => {
    return (
        <div className="socials">
            <div className="socials_block grid grid-cols-2 gap-x-10 gap-y-4">
                {socials && socials.map((social, _i) => (
                    <Link key={social.id} href={social.link} title={social.name}>
                        <div className="p-10 w-40 h-32 flex flex-col items-center justify-center bg-no-repeat" style={{ backgroundImage: `url(${social.imgSrc})` }}></div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default FollowUs;
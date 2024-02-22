import Image from "next/image";
import Link from "next/link";

interface author {
    link: string,
    imgSrc: string,
    imgAlt: string,
    name: string,
    textColor: string
}

const AuthorAvatarNameLink = ({ link, imgSrc, imgAlt, name, textColor }: author) => {
    return (
        <Link href={`/author/${link}`}>
            <div className="author flex items-center space-x-1">
                <span>
                    <Image className="rounded-full" alt={imgAlt} src={imgSrc} width={20} height={20} />
                </span>
                <span className={textColor}>
                    by {name}
                </span>
            </div>
        </Link>
    );
}

export default AuthorAvatarNameLink;
import Image from "next/image";
import Link from "next/link";

interface author {
    link: string,
    imgSrc: string,
    imgAlt: string,
    name: string,
    textColor: string,
    imgSize: number,
}

const AuthorAvatarNameLink = ({ link, imgSrc, imgAlt, name, textColor, imgSize }: author) => {
    return (
        <Link href={`/authors/${link}`}>
            <div className="author flex items-center space-x-2">
                <span>
                    <Image className="rounded-full" alt={imgAlt} src={imgSrc} width={imgSize} height={imgSize} />
                </span>
                <span className={`${textColor} dark:text-white`}>
                    by {name}
                </span>
            </div>
        </Link>
    );
}

export default AuthorAvatarNameLink;
import React from "react";
import Image from "next/image";
import Link from "next/link";

import AuthorProps from "@/_lib/models/AuthorProps";

const AuthorAvatarNameLink: React.FC<AuthorProps> = ({ link, imgSrc, imgAlt, name, textColor, imgSize }) => {
    return (
        <Link href={`/authors/${link}`}>
            <div className="author flex items-center space-x-2">
                <span>
                    <Image className="rounded-full" alt={imgAlt} src={imgSrc} width={imgSize} height={imgSize} />
                </span>
                <span className={`${textColor} sm:text-sm md:text-sm lg:text-lg dark:text-white dark:hover:text-[#43A047]`}>
                    by {name}
                </span>
            </div>
        </Link>
    );
}

export default AuthorAvatarNameLink;
import Link from "next/link";
import React, { ReactNode } from "react";

const BigMenuLink: React.FC<{ path: string, text: string, icon: ReactNode }> = ({ path, text, icon }) => {
    return (
        <li>
            <Link className="items-center laptop:text-sm py-4 desktop:text-base font-medium dark:text-[#FFF] hover:text-[#43A047] transition ease-in-out duration-200 flex" href={`${path}`}><span className="pr-1">{icon}</span>{text}</Link>
        </li>
    );
}

export default BigMenuLink;
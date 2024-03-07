import React from "react";
import Link from "next/link";

const MainMenuLink: React.FC<{ path: string, text: string }> = ({ path, text }) => {
    return (
        <li className="">
            <Link className="font-medium dark:text-[#FFF] hover:text-[#43A047] transition ease-in-out duration-300" href={`${path}`}>{text}</Link>
        </li>
    );
}

export default MainMenuLink;
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { appName, publicLogoSrc } from "@/_lib/variables/constants";

const LogoWithLink: React.FC = () => {
    return (
        <Link href={"/"} title={appName}>
            <div className="flex h-full items-center space-x-2">
                <Image className="justify-center align-middle" src={publicLogoSrc} alt={appName} width={100} height={60} style={{ width: "auto", height: "24px" }} />
                {/* <span className="font-bold laptop:text-xl desktop:text-2xl dark:text-white">{appName}</span> */}
            </div>
        </Link>
    );
}

export default LogoWithLink;
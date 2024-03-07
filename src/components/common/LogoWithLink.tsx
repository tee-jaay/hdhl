import React from "react";
import Link from "next/link";
import Image from "next/image";

const appName = process.env.APP_NAME;

const LogoWithLink: React.FC = () => {
    return (
        <Link href={"/"} title={appName}>
            <div className="flex h-full items-center space-x-2">
                <Image className="justify-center align-middle" src="/logo.png" alt="hdhl" width={100} height={60} style={{ width: "26px", height: "24px" }} />
                <span className="font-extrabold text-2xl dark:text-white">H<span className="underline">D</span>HL</span>
            </div>
        </Link>
    );
}

export default LogoWithLink;
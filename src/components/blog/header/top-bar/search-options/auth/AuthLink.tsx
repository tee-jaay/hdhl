import React from "react";
import Link from "next/link";

const AuthLink: React.FC = () => {
    return (
        <div>
            <Link href={"/auth/login"} className="text-xs font-medium bg-[#222] text-white hover:bg-[#FFF] hover:text-[#222] transition ease-in-out duration-200 py-2 px-4">Login</Link>
        </div>
    );
}

export default AuthLink;
import React from "react";
import Link from "next/link";

const Advertisement: React.FC = () => {
    return (
        <div className="mt-12 border border-gray-400 flex py-8 justify-center items-center dark:text-[#FEFEFE]">
            <Link href={"/contact"}>Advertisement</Link>
        </div>
    );
}

export default Advertisement;
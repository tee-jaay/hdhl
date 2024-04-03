"use client";
import React from "react";
import Link from "next/link";

import AdSterra from "@/components/common/advertisements/AdSterra";

const Advertisement: React.FC = () => {
    if (process.env.NODE_ENV === "production") {
        return (
            <div className="mt-12 h-[310px] border border-gray-400 flex py-8 justify-center items-center dark:text-[#FEFEFE]">
                <AdSterra height={300} width={160} key={process.env?.NEXT_PUBLIC_ADSTERRA_160_300_KEY || ""} />
            </div>
        );
    } else {
        return (
            <div className="mt-12 border border-gray-400 flex py-8 justify-center items-center dark:text-[#FEFEFE]">
                <Link href="/contact">Contact Us</Link>
            </div>
        );
    }
}

export default Advertisement;
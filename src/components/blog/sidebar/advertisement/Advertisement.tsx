"use client";
import React from "react";
import Link from "next/link";

import AdsterraAd from "./AdSterra";

const Advertisement: React.FC = () => {
    if (process.env.NODE_ENV === "production") {
        return (
            <div className="mt-12 border border-gray-400 flex py-8 justify-center items-center dark:text-[#FEFEFE]">
                <AdsterraAd />
            </div>
        );
    } else {
        return (
            <div className="mt-12 border border-gray-400 flex py-8 justify-center items-center dark:text-[#FEFEFE]">
                <Link href="/contact-us">Contact Us</Link>
            </div>
        );
    }
}

export default Advertisement;
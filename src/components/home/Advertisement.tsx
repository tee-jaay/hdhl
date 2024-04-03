"use client";

import React from "react";
import Link from "next/link";

import AdSterra from "../common/advertisements/AdSterra";

const adKey = process.env.NEXT_PUBLIC_ADSTERRA_728_90_KEY;

const Advertisement: React.FC<{}> = () => {

    if (process.env.NODE_ENV === "production") {
        return (
            <section className="laptop:w-[768px] desktop:w-[1024px] dark:text-white flex flex-col items-center justify-center mx-auto h-28 border border-black dark:border-white my-12 phone:px-2 tab:px-0">
                <AdSterra height={90} width={728} key={adKey || ""} />
            </section>
        )
    } else {
        return (
            <section className="laptop:w-[768px] desktop:w-[1024px] dark:text-white flex flex-col items-center justify-center mx-auto h-28 border border-black dark:border-white my-12 phone:px-2 tab:px-0">
                <div>
                    <p className="text-xl uppercase">Advertisement</p>
                </div>
                <div>
                    <p>Want to show your advertisement? <br /> Please <Link href="/contact"><span className="italic underline">Contact Us</span></Link> for the details.</p>
                </div>
            </section>
        );
    }
}

export default Advertisement;
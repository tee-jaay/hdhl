import React from "react";
import { Metadata } from "next";
import Sidebar from "@/components/blog/sidebar/Sidebar";

export const metadata: Metadata = {
    title: "Healthy Diet Happy Life",
    description: "Our Calorie Calculator helps you determine your daily calorie needs based on your age, gender, weight, height, activity level, and weight loss goals. Get started today and take control of your health!",
    keywords: "calorie calculator, calorie intake, weight loss, weight gain, healthy diet, healthy lifestyle",
    alternates: {
        canonical: "/tools/calorie-calculator"
    },
};

export default async function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    if (!React.isValidElement(children)) { return null; }
    return (
        <section className="flex flex-col dark:bg-[#222]">
            <div className="page_header bg-[#FBFAFA] dark:bg-[#333] w-full py-16">
                <h2 className="tab:w-[640px] laptop:w-[768px] desktop:w-full mx-auto capitalize text-[#222] dark:text-white text-center laptop:text-2xl desktop:text-3xl font-medium tracking-wide">Calculators</h2>
                <h6 className="text-[#8F8E8E] dark:text-white text-lg flex justify-center items-center">
                    Home <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                    <span className="capitalize">Tools</span>
                </h6>
            </div>
            <div className="laptop:w-[768px] desktop:w-[1024px] flex phone:flex-col tab:flex-row phone:space-x-0 tab:space-x-6 laptop:space-x-8 mx-auto">
                <div className="phone:w-full flex-1 bg-[#FFFFFF] dark:bg-[#222] phone:px-2 tab:px-1">
                    {children}
                </div>
                <div className="phone:w-full laptop:w-60 desktop:w-72 bg-[#FFFFFF] dark:bg-[#222] phone:px-2 tab:px-1">
                    <Sidebar />
                </div>
            </div>
        </section>
    );
}
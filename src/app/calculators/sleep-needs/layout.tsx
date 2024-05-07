import React from "react";
import { Metadata } from "next";
import Sidebar from "@/components/blog/sidebar/Sidebar";
import CalculatorsBtnLinks from "@/components/common/calculators/CalculatorsBtnLinks";
import CalculatorsHeaderSection from "@/components/common/calculators/CalculatorsHeaderSection";

export const metadata: Metadata = {
    title: "Healthy Diet Happy Life | Sleep Needs",
    description: "Discover the secrets to a good night's sleep with our comprehensive sleep needs app. Understand your sleep patterns, track your progress, and receive personalized tips for optimal rest and improved overall well-being.",
    keywords: "sleep needs, sleep tracker, sleep improvement, sleep hygiene, sleep patterns, sleep quality, sleep disorders, sleep health, sleep cycle, sleep deprivation",
    alternates: {
        canonical: "/calculators/sleep-needs"
    },
};

export default async function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    if (!React.isValidElement(children)) { return null; }
    return (
        <section className="flex flex-col dark:bg-[#222]">
            <CalculatorsHeaderSection slug="/calculators/sleep-needs" title="Sleep Needs" />
            <CalculatorsBtnLinks />
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
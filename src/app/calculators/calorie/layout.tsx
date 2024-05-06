import React from "react";
import { Metadata } from "next";
import Sidebar from "@/components/blog/sidebar/Sidebar";
import PageHeaderSection from "@/components/common/PageHeaderSection";
import ToolsHeader from "@/components/common/tools/ToolsHeader";

export const metadata: Metadata = {
    title: "Healthy Diet Happy Life",
    description: "Our Calorie Calculator helps you determine your daily calorie needs based on your age, gender, weight, height, activity level, and weight loss goals. Get started today and take control of your health!",
    keywords: "calorie calculator, calorie intake, weight loss, weight gain, healthy diet, healthy lifestyle",
    alternates: {
        canonical: "/calculators/calorie"
    },
};

export default async function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    if (!React.isValidElement(children)) { return null; }
    return (
        <section className="flex flex-col dark:bg-[#222]">
            <PageHeaderSection slug="/calculators/calorie" title="Calorie" />
            <ToolsHeader />
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
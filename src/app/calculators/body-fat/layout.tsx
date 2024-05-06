import React from "react";
import { Metadata } from "next";
import Sidebar from "@/components/blog/sidebar/Sidebar";
import PageHeaderSection from "@/components/common/PageHeaderSection";
import ToolsHeader from "@/components/common/tools/ToolsHeader";

export const metadata: Metadata = {
    title: "Healthy Diet Happy Life",
    description: "Calculate your body fat percentage with this online calculator. Simply input your weight, height, and gender to get an estimate of your body fat percentage. Track your progress and monitor your fitness goals.",
    keywords: "body fat percentage calculator, calculate body fat percentage, body composition calculator, body fat calculator, body fat percentage estimation, body fat measurement, body fat percentage formula, body fat percentage chart, body fat percentage ranges, fitness calculator",
    alternates: {
        canonical: "/calculators/body-fat"
    },
};

export default async function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    if (!React.isValidElement(children)) { return null; }
    return (
        <section className="flex flex-col dark:bg-[#222]">
            <PageHeaderSection slug="/calculators/body-fat" title="Fat %" />
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
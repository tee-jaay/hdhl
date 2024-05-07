import React from "react";
import { Metadata } from "next";
import Sidebar from "@/components/blog/sidebar/Sidebar";
import CalculatorsBtnLinks from "@/components/common/calculators/CalculatorsBtnLinks";
import CalculatorsHeaderSection from "@/components/common/calculators/CalculatorsHeaderSection";

export const metadata: Metadata = {
    title: "Healthy Diet Happy Life | Stress Level Calculator",
    description: "Calculate your stress level with this online stress level calculator. Assess your stress based on various factors and get actionable insights. Take control of your well-being.",
    keywords: "stress level calculator, stress assessment tool, stress measurement, stress analysis, stress management, stress factors, stress evaluation, stress test, well-being assessment, stress level calculation, stress level measurement, stress level analysis",
    alternates: {
        canonical: "/calculators/stress-level"
    },
};

export default async function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    if (!React.isValidElement(children)) { return null; }
    return (
        <section className="flex flex-col dark:bg-[#222]">
            <CalculatorsHeaderSection slug="/calculators/stress-level" title="Stress Level" />
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
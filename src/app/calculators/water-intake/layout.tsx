import React from "react";
import { Metadata } from "next";
import Sidebar from "@/components/blog/sidebar/Sidebar";
import CalculatorsBtnLinks from "@/components/common/calculators/CalculatorsBtnLinks";
import CalculatorsHeaderSection from "@/components/common/calculators/CalculatorsHeaderSection";

export const metadata: Metadata = {
    title: "Healthy Diet Happy Life | Water Intake Calculator",
    description: "Calculate your recommended daily water intake with our Water Intake Calculator. Stay hydrated and maintain a healthy lifestyle",
    keywords: "water intake calculator, daily water intake, hydration calculator, recommended water intake, stay hydrated, healthy lifestyle, water consumption, water tracker",
    alternates: {
        canonical: "/calculators/water-intake"
    },
};

export default async function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    if (!React.isValidElement(children)) { return null; }
    return (
        <section className="flex flex-col dark:bg-[#222]">
            <CalculatorsHeaderSection slug="/calculators/water-intake" title="Water Intake" />
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
import React from "react";
import type { Metadata } from "next";

import Sidebar from "@/components/blog/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life | Search",
  description: "Nourish Your Body, Flourish Your Life",
};

export default function BlogLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <section className="flex flex-col mx-auto dark:bg-[#222]">
      <div className="tab:w-[640px] laptop:w-[768px] desktop:w-[1024px] mx-auto flex phone:flex-col laptop:flex-row space-x-8">
        <div className="phone:w-full laptop:w-2/3 bg-[#FFFFFF] dark:bg-[#222] dark:text-white py-12 phone:px-2 tab:px-1">
          {children}
        </div>
        <div className="phone:w-full laptop:w-1/3  bg-[#FFFFFF] dark:bg-[#222]">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}

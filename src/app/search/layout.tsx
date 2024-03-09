import React from "react";
import type { Metadata } from "next";

import Sidebar from "@/components/blog/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life | Search",
  description: "Nourish Your Body, Flourish Your Life",
};

export default function BlogLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <section className="flex flex-col mx-auto">
      <div className="flex sm:w-[640px] md:w-[768px] lg:w-full mx-auto space-x-8">
        <div className="flex-1 bg-[#FFFFFF] py-12">
          {children}
        </div>
        <div className="md:w-60 lg:w-72  bg-[#FFFFFF]">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}

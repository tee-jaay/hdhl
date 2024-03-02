import React from "react";
import type { Metadata } from "next";

import Sidebar from "@/components/blog/sidebar/Sidebar";
import PageHeaderSection from "@/components/common/PageHeaderSection";

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life",
  description: "Nourish Your Body, Flourish Your Life",
};

export default async function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  if (!React.isValidElement(children)) {
    return null;
  }
  const { segmentPath } = children.props ?? null;
  return (
    <section className="flex flex-col">
      <PageHeaderSection slug={segmentPath[3][1]} />
      <div className="w-[1024px] flex space-x-8 mx-auto">
        <div className="flex-1 bg-[#FFFFFF] py-12">
          {children}
        </div>
        <div className="w-72 bg-[#FFFFFF]">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}

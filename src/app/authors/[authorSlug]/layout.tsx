import React from "react";
import type { Metadata } from "next";

import Sidebar from "@/components/blog/sidebar/Sidebar";
import AuthorDetailsPageHeaderSection from "@/components/common/AuthorDetailsPageHeaderSection";

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life | Authors",
  description: "Nourish Your Body, Flourish Your Life",
};

export default function BlogLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  if (!React.isValidElement(children)) { return null; }
  const { segmentPath } = children.props ?? null;
  return (
    <section className="flex flex-col dark:bg-[#222]">
      <AuthorDetailsPageHeaderSection slug={segmentPath[3][1]} />
      <div className="tab:w-[640px] laptop:w-[768px] desktop:w-[1024px] mx-auto flex phone:flex-col tab:flex-row phone:space-x-0 tab:space-x-6 laptop:space-x-8">
        <div className="tab:w-4/5 bg-[#FFFFFF] dark:bg-[#222] py-12 phone:px-2 tab:px-1">
          {children}
        </div>
        <div className="laptop:w-1/5 desktop:w-72 bg-[#FFFFFF] dark:bg-[#222] phone:px-2 tab:px-1">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}

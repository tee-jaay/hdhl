import React from "react";
import type { Metadata } from "next";

import Sidebar from "@/components/blog/sidebar/Sidebar";
import PostHeaderSection from "@/components/common/PostHeaderSection";

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life",
  description: "Nourish Your Body, Flourish Your Life",
};

export default async function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  if (!React.isValidElement(children)) { return null; }
  const { segmentPath } = children.props ?? null;
  return (
    <section className="flex flex-col dark:bg-[#222]">
      <PostHeaderSection slug={segmentPath[3][1]} />
      <div className="laptop:w-[768px] desktop:w-[1024px] flex space-x-8 mx-auto">
        <div className="flex-1 bg-[#FFFFFF] dark:bg-[#222] py-12">
          {children}
        </div>
        <div className="laptop:w-60 desktop:w-72 bg-[#FFFFFF] dark:bg-[#222]">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}

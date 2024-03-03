import React from "react";
import type { Metadata } from "next";
import CategoryHeaderSection from "@/components/common/CategoryHeaderSection";

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life | Categories",
  description: "Nourish Your Body, Flourish Your Life",
};

export default function BlogLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  if (!React.isValidElement(children)) { return null; }
  const { segmentPath } = children.props ?? null;
  return (
    <section className="flex flex-col">
      <div className="blog_header bg-[#FBFAFA] w-full">
        {segmentPath[3][1].length > 0 && <CategoryHeaderSection slug={segmentPath[3][1]} />}
      </div>
      <div className="w-[1024px] flex space-x-8 mx-auto">
        <div className="flex-1 bg-[#FFFFFF] py-12">
          {children}
        </div>
      </div>
    </section>
  );
}
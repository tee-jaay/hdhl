import React from "react";
import type { Metadata } from "next";
import TagHeaderSection from "@/components/common/TagHeaderSection";

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life | Tags",
  description: "Nourish Your Body, Flourish Your Life",
};

export default function BlogLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  if (!React.isValidElement(children)) { return null; }
  const { segmentPath } = children.props ?? null;
  return (
    <section className="flex flex-col dark:bg-[#222]">
      <div className="bg-[#FBFAFA] w-full">
        {segmentPath[3][1].length > 0 && <TagHeaderSection slug={segmentPath[3][1]} />}
      </div>
      <div className="w-[1024px] flex space-x-8 mx-auto">
        <div className="flex-1 bg-[#FFFFFF] dark:bg-[#222] py-12">
          {children}
        </div>
      </div>
    </section>
  );
}

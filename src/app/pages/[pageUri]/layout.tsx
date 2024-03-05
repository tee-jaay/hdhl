import React from "react";
import type { Metadata } from "next";

import PageHeaderSection from "@/components/common/PageHeaderSection";

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life | Page",
  description: "Nourish Your Body, Flourish Your Life",
};

export default function BlogLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  if (!React.isValidElement(children)) { return null; }
  const { segmentPath } = children.props ?? null;
  return (
    <section className="flex flex-col mx-auto">
      <PageHeaderSection slug={segmentPath[3][1]} />
      <div className="flex space-x-8 mx-auto" style={{ width: "1023px" }}>
        <div className="flex-1 bg-[#FFFFFF] py-12">
          {children}
        </div>
      </div>
    </section>
  );
}

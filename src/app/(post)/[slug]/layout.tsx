import type { Metadata } from "next";

import Sidebar from "@/components/blog/sidebar/Sidebar";
import PageHeaderSection from "@/components/common/PageHeaderSection";

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life",
  description: "Nourish Your Body, Flourish Your Life",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col">
      <PageHeaderSection />
      <div className="flex space-x-8 mx-auto" style={{ width: "1024px" }}>
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

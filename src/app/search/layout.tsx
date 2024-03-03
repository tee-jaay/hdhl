import Link from "next/link";
import type { Metadata } from "next";

import Sidebar from "@/components/blog/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life | Search",
  description: "Nourish Your Body, Flourish Your Life",
};

export default function BlogLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <section className="flex flex-col mx-auto">
      <div className="blog_header py-16 bg-[#FBFAFA] w-full">
        <h2 className="text-[#000000] text-center text-4xl font-medium tracking-wide">Search Text</h2>
        <h6 className="text-[#8F8E8E] text-lg flex justify-center items-center">
          Home <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <Link href={"/search/search-text"}>Search Text</Link>
        </h6>
      </div>
      <div className="flex space-x-8 mx-auto" style={{ width: "1023px" }}>
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
import type { Metadata } from "next";
import Sidebar from "@/components/blog/sidebar/Sidebar";
import Link from "next/link";

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
    <section className="flex flex-col mx-auto" style={{ width: "1024px" }}>
      <div className="blog_header py-16 bg-[#FBFAFA]">
        <h2 className="text-[#000000] text-center text-4xl font-medium tracking-wide">Post Title</h2>
        <h6 className="text-[#8F8E8E] text-lg flex justify-center items-center">
          Home <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <Link href={"/category/category-slug"}>Category</Link>
        </h6>
      </div>
      <div className="flex flex-row space-x-8">
        <div className="flex-1 bg-[#FFFFFF] py-12">
          {children}
        </div>
        <div className="w-72 bg-gray-100">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}

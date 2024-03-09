import Link from "next/link";
import type { Metadata } from "next";
import Sidebar from "@/components/blog/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life | Blog",
  description: "Nourish Your Body, Flourish Your Life",
};

export default function BlogLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <section className="flex flex-col mx-auto dark:bg-[#222]">
      <div className="blog_header md:w-[768px] lg:w-[1024px] xl:w-full mx-auto py-16 bg-[#FBFAFA] dark:bg-[#333]">
        <h2 className="text-[#000000] dark:text-white text-center sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide">Blog</h2>
        <h6 className="text-[#8F8E8E] dark:text-white text-lg flex justify-center items-center">
          <Link href="/">Home</Link> <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <span>Blog</span>
        </h6>
      </div>
      <div className="sm:w-[640px] md:w-[768px] lg:w-[1024px] mx-auto flex space-x-8">
        <div className="flex-1 bg-[#FFFFFF] dark:bg-[#222] py-12">
          {children}
        </div>
        <div className="md:w-60 lg:w-72 bg-[#FFFFFF] dark:bg-[#222]">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}

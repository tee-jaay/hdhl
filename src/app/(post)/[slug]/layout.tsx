import type { Metadata } from "next";
import Sidebar from "@/components/blog/sidebar/Sidebar";

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
    <section className="flex flex-col mx-auto" style={{ width: "1120px" }}>
      <div className="blog_header py-16 bg-[#FBFAFA]">
        <h2 className="text-[#000000] text-center text-4xl font-medium tracking-wide">Post Title</h2>
        <h6 className="text-[#8F8E8E] text-center text-lg">Home <span>.</span> Category</h6>
      </div>
      <div className="flex flex-row space-x-8">
        <div className="flex-1 bg-[#FFFFFF] py-12 pl-8">
          {children}
        </div>
        <div className="w-80 bg-gray-100">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}

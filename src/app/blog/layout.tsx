import type { Metadata } from "next";
import Sidebar from "@/components/blog/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life | Blog",
  description: "Nourish Your Body, Flourish Your Life",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex mx-auto" style={{ width: "1024px" }}>
      <div className="flex-1 ">
        {children}
      </div>
      <div className="w-72">
        <Sidebar />
      </div>
    </div>
  );
}

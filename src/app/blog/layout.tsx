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
    <div className="flex mx-auto" style={{ width: "1120px" }}>
      <div className="flex-1 bg-teal-300">
        {children}
      </div>
      <div className="flex-2 bg-fuchsia-400">
        <Sidebar />
      </div>
    </div>
  );
}

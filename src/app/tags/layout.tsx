import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life | Tags",
  description: "Nourish Your Body, Flourish Your Life",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col">
      <div className="blog_header py-16 bg-[#FBFAFA] w-full">
        <h2 className="text-[#000000] text-center text-4xl font-medium tracking-wide">Posts With "TagName"</h2>
        <h6 className="text-[#8F8E8E] text-lg flex justify-center items-center">
          44 posts with the tag "TagName"
        </h6>
      </div>
      <div className="flex space-x-8 mx-auto" style={{ width: "1024px" }}>
        <div className="flex-1 bg-[#FFFFFF] py-12">
          {children}
        </div>
      </div>
    </section>
  );
}

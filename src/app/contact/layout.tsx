import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life | Contact Us",
  description: "Nourish Your Body, Flourish Your Life",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col mx-auto">
      <div className="blog_header py-16 bg-[#FBFAFA] w-full">
        <h2 className="text-[#000000] text-center text-4xl font-medium tracking-wide">Contact Us</h2>
      </div>
      <div className="flex space-x-8 mx-auto" style={{ width: "1023px" }}>
        <div className="flex-1 bg-[#FFFFFF] py-12">
          {children}
        </div>
      </div>
    </section>
  );
}

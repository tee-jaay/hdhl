import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life | Categories",
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
        <h2 className="text-[#000000] text-center text-4xl font-medium tracking-wide">All Authors</h2>
        <p className="text-center mx-auto mt-4" style={{ width: "1024px" }}>Category description Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora quos nulla minima voluptatibus incidunt velit quia sequi sint quas deserunt debitis, maxime quibusdam beatae unde, ut aperiam omnis! Facilis.</p>
      </div>
      <div className="flex space-x-8 mx-auto" style={{ width: "1024px" }}>
        <div className="flex-1 bg-[#FFFFFF] py-12">
          {children}
        </div>
      </div>
    </section>
  );
}

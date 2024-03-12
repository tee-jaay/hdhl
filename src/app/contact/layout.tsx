import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life | Contact Us",
  description: "Nourish Your Body, Flourish Your Life",
};

export default function BlogLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <section className="flex flex-col mx-auto dark:text-white  dark:bg-[#222]">
      <div className="w-full mx-auto py-16 bg-[#FBFAFA] dark:bg-[#333]">
        <h2 className="text-[#222] dark:text-white text-center laptop:text-2xl desktop:text-3xl font-medium tracking-wide">Contact Us</h2>
        <h6 className="text-[#8F8E8E] dark:text-white laptop:text- desktop:text-lg flex justify-center items-center">
          Home <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <span>Contact Us</span>
        </h6>
      </div>
      <div className="tab:w-[640px] laptop:w-[768px] desktop:w-[1024px] flex space-x-8 mx-auto phone:px-2 tab:px-1">
        <div className="flex-1 bg-[#FFFFFF] dark:bg-[#222] py-12">
          {children}
        </div>
      </div>
    </section>
  );
}

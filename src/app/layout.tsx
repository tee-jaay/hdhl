import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "@/components/blog/header/Header";
import Footer from "@/components/blog/footer/Footer";
import Sidebar from "@/components/blog/sidebar/Sidebar";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/home/Hero";

const inter = Inter({ subsets: ["latin"] });
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life",
  description: "Nourish Your Body, Flourish Your Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white">
          <Header />
        </div>
        {/* Hero */}
        <Hero fontClassName={leagueSpartan.className} />

        <div className="carousel">
          <div className="navigation">
            <span>icon</span>
            <span>icon</span>
          </div>
          <div className="items">
            <div className="item">
              <div className="item-image">image</div>
              <div className="item-meta">
                <h5 className="item-category">TRAVEL</h5>
                <h4 className="item-title">Need some fresh air</h4>
                <h6 className="item-date"><span className="">icon</span> April 20, 2022</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <main className="flex-grow bg-green-200">
            {children}
          </main>
          <aside className="flex-none w-1/4 bg-yellow-300">
            <Sidebar />
          </aside>
        </div>
        <div className="bg-blue-300">
          <Footer />
        </div>
      </body>
    </html>
  );
}

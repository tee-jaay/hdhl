import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "@/components/blog/header/Header";
import Footer from "@/components/blog/footer/Footer";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Healthy Diet Happy Life",
  description: "Nourish Your Body, Flourish Your Life",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <div className="bg-white">
          <Header />
        </div>
        <main>
          {children}
        </main>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

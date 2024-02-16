import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/blog/header/Header";
import Footer from "@/components/blog/footer/Footer";
import Sidebar from "@/components/blog/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

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
        <div className="bg-red-300">
          <Header />
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

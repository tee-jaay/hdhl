import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "@/components/blog/header/Header";
import Footer from "@/components/blog/footer/Footer";
import { ahrefsValidate, msValidate } from "@/_lib/variables/constants";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || "https://healthydiethappylife.com"),
  title: "Healthy Diet Happy Life",
  description: "Nourish Your Body, Flourish Your Life",
  alternates: {
    canonical: "/"
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <meta name="msvalidate.01" content={msValidate} />
      <meta name="ahrefs-site-verification" content={ahrefsValidate} />
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

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
        <div className="bg-white">
          <Header />
        </div>
        <section className="hero flex space-x-6">
          <div className="hero_left flex-1 py-10" style={{ backgroundImage: `url("https://picsum.photos/500/600")` }}>
            <div className="hero_one_item">
              <div className="category">lifestyle</div>
              <h1 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
              <div className="meta flex">
                <div className="author">by Jon Deo</div>
                <div className="date"><span className="icon">icon</span> March 29, 2022</div>
                <div className="comments">99 Comments</div>
              </div>
            </div>
          </div>
          <div className="hero_right flex-1 flex-col space-y-6">
            <div className="flex-1 py-10" style={{ backgroundImage: `url("https://picsum.photos/400/500")` }}>
              <div className="category">politics</div>
              <h2 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
              <div className="meta flex">
                <div className="author">by Jon Deo</div>
                <div className="date"><span className="icon">icon</span> March 29, 2022</div>
                <div className="comments">99 Comments</div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex space-x-6">
                <div className="flex-1 py-" style={{ backgroundImage: `url("https://picsum.photos/400/300")` }}>
                  <div className="category">technology</div>
                  <h4>Repellat reprehenderit eum error</h4>
                  <div className="author">by Jon Deo</div>
                </div>
                <div className="flex-1 py-5" style={{ backgroundImage: `url("https://picsum.photos/400/300?q=2")` }}>
                  <div className="category">travel</div>
                  <h4>consectetur voluptates modi eos hic</h4>
                  <div className="author">by Jon Deo</div>
                </div>
              </div>
            </div>
          </div>
        </section>
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

import { League_Spartan } from "next/font/google";
import Sidebar from "@/components/blog/sidebar/Sidebar";
import Hero from "@/components/home/Hero";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
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
        <aside className="flex-none w-1/4 bg-yellow-300">
          <Sidebar />
        </aside>
      </div>
    </>
  );
}

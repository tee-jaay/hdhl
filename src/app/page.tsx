import Sidebar from "@/components/blog/sidebar/Sidebar";
import Hero from "@/components/home/Hero";
import Carousel from "@/components/home/Carousel";
import TrendingStories from "@/components/home/TrendingStories";
import LatestPosts from "@/components/home/LatestPosts";
import WhatsNew from "@/components/home/WhatsNew";
import TrendingVideos from "@/components/home/TrendingVideos";
import FeaturePosts from "@/components/home/FeaturePosts";
import WeekendTop from "@/components/home/WeekendTop";
import Advertisement from "@/components/home/Advertisement";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Carousel */}
      <Carousel />

      {/* Trending */}
      <TrendingStories />

      {/* Latest Posts */}
      <LatestPosts />

      {/* Whats New */}
      <WhatsNew />

      {/* Trending Videos */}
      <TrendingVideos />

      {/* Feature Posts */}
      <FeaturePosts />

      {/* Weekend Top */}
      <WeekendTop />

      {/* Advertisement */}
      <Advertisement />

      <div className="flex flex-row">
        <aside className="flex-none w-1/4 bg-yellow-300">
          <Sidebar />
        </aside>
      </div>
    </>
  );
}

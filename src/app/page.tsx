import Sidebar from "@/components/blog/sidebar/Sidebar";
import Hero from "@/components/home/Hero";
import Carousel from "@/components/home/Carousel";
import LatestPosts from "@/components/home/LatestPosts";
import TrendingVideos from "@/components/home/TrendingVideos";
import FeaturePosts from "@/components/home/FeaturePosts";
import Advertisement from "@/components/home/Advertisement";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Carousel */}
      <Carousel />

      {/* Latest Posts */}
      <LatestPosts />

      {/* Advertisement */}
      <Advertisement />

      {/* Trending Videos */}
      <TrendingVideos />

      {/* Feature Posts */}
      <FeaturePosts />

      <div className="flex flex-row">
        <aside className="flex-none w-1/4 bg-yellow-300">
          <Sidebar />
        </aside>
      </div>
    </>
  );
}

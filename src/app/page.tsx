import Hero from "@/components/home/Hero";
import Carousel from "@/components/home/Carousel";
import LatestPosts from "@/components/home/LatestPosts";
import TrendingVideos from "@/components/home/TrendingVideos";
import EditorsChoice from "@/components/home/EditorsChoice";
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

      {/* Editors Choice */}
      <EditorsChoice />
    </>
  );
}

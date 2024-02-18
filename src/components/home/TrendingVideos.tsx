"use client";
import YouTube, { YouTubeProps } from "react-youtube";
import SectionHeading from "../common/SectionHeading";
import CategoryNameSlug from "../common/CategoryNameSlug";
import Image from "next/image";

const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
}

const opts: YouTubeProps['opts'] = {
    height: '420',
    width: '800',
    playerVars: {
        autoplay: 0,
    },
};

const TrendingVideos = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-[#161b2a] to-black">
            <div className="mx-auto" style={{ width: '1200px' }}>
                <SectionHeading color={"text-[#FFFFFF]"} text={"Trending Videos"} />
                <div className="flex">
                    <div className="youtube-video flex-3/5">
                        <YouTube videoId="RbptYSgAUrc" opts={opts} onReady={onPlayerReady} />
                    </div>
                    <div className="flex-2/5 px-8 space-y-8">
                        <div className="flex space-x-8">
                            <div className="flex-2/3">
                                <CategoryNameSlug color={"text-[#FFFFFF]"} name={"Travel"} slug="travel" />
                                <h4 className="text-[#FFFFFF]">Aliquam autem magni ea</h4>
                            </div>
                            <div className="flex-1/3">
                                <Image alt="" src={"https://picsum.photos/100"} width={80} height={80} />
                            </div>
                        </div>
                        <div className="flex space-x-8">
                            <div className="flex-2/3">
                                <CategoryNameSlug color={"text-[#FFFFFF]"} name={"Travel"} slug="travel" />
                                <h4 className="text-[#FFFFFF]">Aliquam autem magni ea</h4>
                            </div>
                            <div className="flex-1/3">
                                <Image alt="" src={"https://picsum.photos/100"} width={80} height={80} />
                            </div>
                        </div>
                        <div className="flex space-x-8">
                            <div className="flex-2/3">
                                <CategoryNameSlug color={"text-[#FFFFFF]"} name={"Travel"} slug="travel" />
                                <h4 className="text-[#FFFFFF]">Aliquam autem magni ea</h4>
                            </div>
                            <div className="flex-1/3">
                                <Image alt="" src={"https://picsum.photos/100"} width={80} height={80} />
                            </div>
                        </div>
                        <div className="flex space-x-8">
                            <div className="flex-2/3">
                                <CategoryNameSlug color={"text-[#FFFFFF]"} name={"Travel"} slug="travel" />
                                <h4 className="text-[#FFFFFF]">Aliquam autem magni ea</h4>
                            </div>
                            <div className="flex-1/3">
                                <Image alt="" src={"https://picsum.photos/100"} width={80} height={80} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrendingVideos;
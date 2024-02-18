"use client";
import { useState } from "react";
import Image from "next/image";
import YouTube, { YouTubeProps } from "react-youtube";
import SectionHeading from "../common/SectionHeading";
import CategoryNameSlug from "../common/CategoryNameSlug";

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

const limitString = (str: string, limit: number): string => {
    if (str.length > limit) {
        return str.substring(0, limit);
    }
    return str;
}

const youtubePlayist = [
    {
        videoId: 'ZxZO9wdOHPU',
        categoryName: 'Recipe',
        categorySlug: 'recipe',
        title: '10 Easy and Healthy Lunch Recipes For Weight Loss | Healthy Diet Happy Life',
        imgSrc: 'https://picsum.photos/100?q=1',
        imgAlt: '10 Easy and Healthy Lunch Recipes',
    },
    {
        videoId: 'gfmJD96yd38',
        categoryName: 'Recipe',
        categorySlug: 'recipe',
        title: '10 Healthy and Delicious Dinner Recipes For Weight Loss | Healthy Diet Happy Life',
        imgSrc: 'https://picsum.photos/100?q=2',
        imgAlt: '10 Healthy and Delicious Dinner Recipes',
    },
    {
        videoId: 'LMLSISU0GFc',
        categoryName: 'Recipe',
        categorySlug: 'recipe',
        title: '10 Healthy and Easy Snack Recipes For Weight Loss | Healthy Diet Happy Life',
        imgSrc: 'https://picsum.photos/100?q=3',
        imgAlt: '10 Healthy and Easy Snack Recipes',
    },
    {
        videoId: 'YYUhtNe8sBg',
        categoryName: 'Recipe',
        categorySlug: 'recipe',
        title: '10 Healthy and Delicious Smoothie Recipes For Weight Loss | Healthy Diet Happy Life',
        imgSrc: 'https://picsum.photos/100?q=4',
        imgAlt: '10 Healthy and Delicious Smoothie Recipes',
    },
];

const TrendingVideos = () => {

    const [videoId, setVideoId] = useState("RbptYSgAUrc");

    return (
        <section className="py-16 bg-gradient-to-b from-[#161b2a] to-black">
            <div className="mx-auto" style={{ width: "1120px" }}>
                <SectionHeading color={"text-[#FFFFFF]"} text={"Trending Videos"} />
                <div className="flex space-x-8">
                    <div className="youtube-video flex-5">
                        <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
                    </div>
                    <div className="flex-1 space-px-8 space-y-8">
                        {youtubePlayist && youtubePlayist.map((item, i) => (
                            <div key={i} className="flex space-x-8 cursor-pointer">
                                <div className="flex-1">
                                    <CategoryNameSlug color={"text-[#FFFFFF]"} name={item.categoryName} slug={item.categorySlug} />
                                    <h4 className="text-[#FFFFFF] font-semibold">{limitString(item.title, 40)}</h4>
                                </div>
                                <div className="flex-4">
                                    <div onClick={() => setVideoId(item.videoId)}>
                                        <Image alt={item.imgAlt} src={item.imgSrc} width={80} height={80} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrendingVideos;
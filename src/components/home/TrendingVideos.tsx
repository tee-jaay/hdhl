"use client";

import React, { useState } from "react";
import Image from "next/image";
import YouTube, { YouTubeProps } from "react-youtube";
import SectionHeading from "../common/SectionHeading";
import CategoryNameSlug from "../common/CategoryNameSlug";

const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
}

const limitString = (str: string, limit: number): string => {
    if (str.length > limit) {
        return str.substring(0, limit);
    }
    return str;
}

const youtubePlayist = [
    {
        videoId: "ZxZO9wdOHPU",
        categoryName: "Recipe",
        categorySlug: "recipe",
        title: "10 Easy and Healthy Lunch Recipes For Weight Loss | Healthy Diet Happy Life",
        imgSrc: "https://picsum.photos/100?q=1",
        imgAlt: "10 Easy and Healthy Lunch Recipes",
    },
    {
        videoId: "gfmJD96yd38",
        categoryName: "Recipe",
        categorySlug: "recipe",
        title: "10 Healthy and Delicious Dinner Recipes For Weight Loss | Healthy Diet Happy Life",
        imgSrc: "https://picsum.photos/100?q=2",
        imgAlt: "10 Healthy and Delicious Dinner Recipes",
    },
    {
        videoId: "LMLSISU0GFc",
        categoryName: "Recipe",
        categorySlug: "recipe",
        title: "10 Healthy and Easy Snack Recipes For Weight Loss | Healthy Diet Happy Life",
        imgSrc: "https://picsum.photos/100?q=3",
        imgAlt: "10 Healthy and Easy Snack Recipes",
    },
    {
        videoId: "YYUhtNe8sBg",
        categoryName: "Recipe",
        categorySlug: "recipe",
        title: "10 Healthy and Delicious Smoothie Recipes For Weight Loss | Healthy Diet Happy Life",
        imgSrc: "https://picsum.photos/100?q=4",
        imgAlt: "10 Healthy and Delicious Smoothie Recipes",
    },
];

const TrendingVideos: React.FC<{}> = () => {
    const [videoId, setVideoId] = useState("RbptYSgAUrc");

    const opts: YouTubeProps["opts"] = {
        height: "420",
        width: "100%",
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <section className="phone:py-8 tab:py-10 laptop:py-12 desktop:py-16 bg-gradient-to-b from-[#161b2a] to-black">
            <div className="laptop:w-[768px] desktop:w-[1024px] mx-auto">
                <SectionHeading color={"text-[#FFFFFF]"} text={"Trending Videos"} />
                <div className="flex space-x-8">
                    <div className="youtube_video w-4/6">
                        <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
                    </div>
                    <div className="youtube_playlist space-y-8 w-2/6">
                        {youtubePlayist && youtubePlayist.map((item, i) => (
                            <div key={i} className="flex space-x-8 cursor-pointer">
                                <div className="flex-1">
                                    <CategoryNameSlug bgColor="" count={0} id="" imgSrc="" color={"text-[#FFFFFF]"} name={item.categoryName} slug={item.categorySlug} />
                                    <h4 className="text-[#FFFFFF] laptop:font-normal desktop:font-semibold laptop:line-clamp-2 desktop:line-clamp-3">{limitString(item.title, 40)}</h4>
                                </div>
                                <div className="w-20">
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
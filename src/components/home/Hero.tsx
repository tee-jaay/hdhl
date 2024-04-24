"use client";

import React, { useEffect, useState } from "react";

import getPostsByTag from "@/_lib/graphQl/queries/getPostsByTag";
import HeroBig from "./hero/HeroBig";
import HeroMedium from "./hero/HeroMedium";
import HeroSmall from "./hero/HeroSmall";
import HeroPostsLoader from "../loaders/HeroPostsLoader";

const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

const getData = async () => {
    // Construct the query and variables
    const query = getPostsByTag();
    const variables = { tag: "featured", first: 8, };
    try {
        // Make the request and return the data
        const response = await fetch("/api/pages/home/featured-posts", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ query: query, variables: variables, })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const Hero: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        setIsFetching(true);
        getData()
            .then((res) => {
                const shuffledPosts = shuffleArray(res?.posts?.nodes || []);
                setPosts(shuffledPosts);
            })
            .catch((e) => console.log(e))
            .finally(() => setIsFetching(false)
            );
    }, []);

    if (isFetching) return <HeroPostsLoader />

    if (!isFetching) {
        return (
            <section className="hero phone:h-[400px] laptop:h-[400px] desktop:h-[580px] flex space-x-6">
                {posts[0] && <HeroBig post={posts[0]} />}
                <div className="hero_right tab:w-1/2 laptop:w-1/2 h-full flex-1 flex-col space-y-6 overflow-clip phone:hidden tab:block">
                    <div className="h-1/2">
                        {posts[1] && <HeroMedium post={posts[1]} />}
                    </div>
                    <div className="flex-1 h-1/2">
                        <div className="flex h-full space-x-6">
                            {posts[2] && <HeroSmall post={posts[2]} />}
                            {posts[3] && <HeroSmall post={posts[3]} />}
                        </div>
                    </div>
                </div>
            </section>
        )
    };
}

export default Hero;
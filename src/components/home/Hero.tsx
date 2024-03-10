import React from "react";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getPostsByTag from "@/_lib/graphQl/queries/getPostsByTag";
import HeroBig from "./hero/HeroBig";
import HeroMedium from "./hero/HeroMedium";
import HeroSmall from "./hero/HeroSmall";

const getData = async () => {
    // Construct the query and variables
    const query = getPostsByTag();
    const variables = {
        tag: "featured",
        first: 10,
    };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data?.posts?.nodes;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const Hero: React.FC = async () => {
    const data = await getData();
    return (
        <section className="hero phone:h-[400px] laptop:h-[400px] desktop:h-[580px] flex space-x-6">
            <HeroBig post={data[0]} />
            <div className="hero_right h-full flex-1 flex-col space-y-6 overflow-clip phone:hidden tab:block">
                <div className="h-1/2">
                    <HeroMedium post={data[1]} />
                </div>
                <div className="flex-1 h-1/2">
                    <div className="flex h-full space-x-6">
                        <HeroSmall post={data[2]} />
                        <HeroSmall post={data[3]} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
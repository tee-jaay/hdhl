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

const Hero = async () => {
    const data = await getData();
    return (
        <section className="hero flex space-x-6">
            <HeroBig post={data[0]} />
            <div className="hero_right flex-1 flex-col ">
                <HeroMedium post={data[1]} />
                <div className="flex-1 h-1/2 pt-6">
                    <div className="flex space-x-6">
                        <HeroSmall post={data[2]} />
                        <HeroSmall post={data[3]} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
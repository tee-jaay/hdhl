import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getPostsByTag from "@/_lib/graphQl/queries/getPostsByTag";
import CarouselSlider from "./carousel/CarouselSlider";

const getData = async () => {
    // Construct the query and variables
    const query = getPostsByTag();
    const variables = {
        tag: "carousel",
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

const Carousel = async () => {
    const data = await getData();
    return (
        <section className="carousel w-[1024px] flex pt-24 pb-8 mx-auto dark:text-white">
            <CarouselSlider carouselItems={data} />
        </section>
    );
};

export default Carousel;
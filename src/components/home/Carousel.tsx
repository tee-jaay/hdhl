import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getPostsByTag from "@/_lib/graphQl/queries/getPostsByTag";
import CarouselSlider from "./carousel/CarouselSlider";

const getData = async () => {
    // Construct the query and variables
    const query = getPostsByTag();
    const variables = {
        tag: "recommended",
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
        <section className="carousel flex py-16 mx-auto" style={{ width: '1024px' }}>
            <CarouselSlider carouselItems={data} />
        </section>
    );
};

export default Carousel;
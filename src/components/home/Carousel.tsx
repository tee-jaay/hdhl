import getPostsByTag from "@/_lib/graphQl/queries/getPostsByTag";
import CarouselSlider from "./carousel/CarouselSlider";

const carouselItemsList = async () => {
    // Send the query to the GraphQL API
    const response = await fetch(`${process.env.GRAPHQL_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: getPostsByTag(),
            variables: {
                tag: "recommended",
            },
        }),
    });

    // Parse the response body as JSON
    const data = await response.json();
    const { nodes } = data?.data?.posts;

    // Return the posts from the GraphQL API
    return new Response(JSON.stringify(nodes));
}

async function getData() {
    const res = await carouselItemsList();

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = res.json();
    return data;
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
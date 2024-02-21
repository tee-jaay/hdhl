import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import getFooterData from "@/_lib/graphQl/queries/getFooterData";

const footerData = async () => {
    // Send the query to the GraphQL API
    const response = await fetch(`${process.env.GRAPHQL_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: getFooterData(),
        }),
    });

    // Parse the response body as JSON
    const data = await response.json();
    const { pages: { nodes: pages }, tags: { nodes: tags }, generalSettings } = data?.data;

    // Return the pages,tags, generalSettings from the GraphQL API
    return new Response(JSON.stringify({ pages, tags, generalSettings }));
}

async function getData() {
    const res = await footerData();

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = res.json();
    return data;
}

const Footer = async () => {
    const data = await getData();
    const { pages, tags, generalSettings } = data;

    return (
        <section className="bg-[#161B2B]">
            <footer className="mx-auto" style={{ width: "1024px" }}>
                <div className="pt-14 pb-8">
                    <FooterTop generalSettings={generalSettings} pages={pages} tags={tags} />
                </div>
                <div className="border-t-2 border-gray-700">
                    <FooterBottom />
                </div>
            </footer>
        </section>
    );
}

export default Footer;
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getFooterData from "@/_lib/graphQl/queries/getFooterData";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const getData = async () => {
    // Construct the query and variables
    const query = getFooterData();
    const variables = {};
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        const { pages: { nodes: pages }, tags: { nodes: tags }, generalSettings } = data;
        return { pages, tags, generalSettings };
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
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
                    <FooterBottom generalSettings={generalSettings} />
                </div>
            </footer>
        </section>
    );
}

export default Footer;
import React from "react";
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getFooterData from "@/_lib/graphQl/queries/getFooterData";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import CookieConsent from "@/components/common/cookie-consent/CookieConsent";

const getData = async () => {
    // Construct the query and variables
    const query = getFooterData();
    const variables = {};
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        const { pages: { nodes: pages }, tags: { nodes: tags }, generalSettings } = data;
        // Filter out the page with the slug "contact-us"
        const filteredPages = pages.filter((page: any) => page.slug !== "contact-us");
        return { pages: filteredPages, tags, generalSettings };
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const Footer: React.FC = async () => {
    const data = await getData();
    const { pages, tags, generalSettings } = data;

    return (
        <section className="bg-[#161B2B]">
            <footer className="laptop:w-[768px] desktop:w-[1024px] mx-auto">
                <div className="pt-14 pb-8">
                    <FooterTop generalSettings={generalSettings} pages={pages} tags={tags} />
                </div>
                <div className="border-t-2 border-gray-700">
                    <FooterBottom generalSettings={generalSettings} />
                </div>
            </footer>
            <CookieConsent />
        </section>
    );
}

export default Footer;
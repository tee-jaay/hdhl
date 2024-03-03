import gqlQuery from "@/_lib/graphQl/gqlQuery";
import GetPageDetailsByUri from "@/_lib/graphQl/queries/getPageDetailsByUri";

const getData = async (uri: string) => {
    // Construct the query and variables
    const query = GetPageDetailsByUri();
    const variables = { id: uri };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data?.page;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const PageHeaderSection = async ({ slug }: { slug: string }) => {
    const page = await getData(slug);
    return (
        <div className="page_header bg-[#FBFAFA] w-full py-16">
            <h2 className="w-[1024px] mx-auto capitalize text-[#000000] text-center text-4xl font-medium tracking-wide">{page?.title}</h2>
            <h6 className="text-[#8F8E8E] text-lg flex justify-center items-center">
                Home <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span className="capitalize">{page?.title}</span>
            </h6>
        </div>
    );
}

export default PageHeaderSection;
import PageProps from "@/_models/PageProps";
import gqlQuery from "@/_lib/graphQl/gqlQuery";
import GetPageDetailsByUri from "@/_lib/graphQl/queries/getPageDetailsByUri";

const getData = async (pageUri: string) => {
    // Construct the query and variables
    const query = GetPageDetailsByUri();
    const variables = { id: pageUri, };
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

const PageDetails = async ({ params }: { params: { pageUri: string } }) => {
    const page: PageProps = await getData(params.pageUri);
    return (
        <div>
            <h1>{page?.title}</h1>
            <div className="text-[#444]" dangerouslySetInnerHTML={{ __html: page?.content ?? "" }} />
        </div>
    );
}

export default PageDetails;
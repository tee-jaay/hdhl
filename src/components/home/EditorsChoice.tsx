import SectionHeading from "../common/SectionHeading";
import PostsList from "./editors-choice/PostsList";
import CatgoriesGrid from "./editors-choice/CatgoriesGrid";
import RoundImageCategoryTitle from "../common/RoundImageCategoryTitle";
import FollowUs from "./editors-choice/FollowUs";
import getPostsByTag from "@/_lib/graphQl/queries/getPostsByTag";

const editorsChoice = async () => {
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
    const res = await editorsChoice();

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = res.json();
    return data;
}

const EditorsChoice = async () => {
    const data = await getData();

    return (
        <section className="mx-auto py-16 bg-[#FBF8F5]">
            <div className="mx-auto" style={{ width: "1024px" }}>
                <div className="flex space-x-8 align-baseline">
                    <div className="flex-1">
                        <SectionHeading text="Editor's Choice" color="text-[#000000]" />
                        <PostsList posts={data} />
                    </div>
                    <div className="w-80">
                        <CatgoriesGrid />
                        <div className="most_reads">
                            <h4 className="text-2xl mt-10 mb-6">Most Reads</h4>
                            <RoundImageCategoryTitle />
                        </div>
                        <div className="follow_us">
                            <h4 className="text-2xl mt-10 my-6">Follow Us</h4>
                            <FollowUs />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditorsChoice;
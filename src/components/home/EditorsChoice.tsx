import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getPostsByTag from "@/_lib/graphQl/queries/getPostsByTag";
import SectionHeading from "../common/SectionHeading";
import PostsList from "./editors-choice/PostsList";
import CatgoriesGrid from "./editors-choice/CatgoriesGrid";
import RoundImageCategoryTitle from "../common/RoundImageCategoryTitle";
import FollowUs from "./editors-choice/FollowUs";

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
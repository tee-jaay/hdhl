import SectionHeading from "../common/SectionHeading";
import PostsList from "./editors-choice/PostsList";
import CatgoriesGrid from "./editors-choice/CatgoriesGrid";
import RoundImageCategoryTitle from "../common/RoundImageCategoryTitle";
import FollowUs from "./editors-choice/FollowUs";

const EditorsChoice = () => {
    return (
        <section className="mx-auto py-16 bg-[#FBF8F5]">
            <div className="mx-auto" style={{ width: "1120px" }}>
                <div className="flex space-x-8 align-baseline">
                    <div className="flex-2/3">
                        <SectionHeading text="Editor's Choice" color="text-[#000000]" />
                        <PostsList />
                    </div>
                    <div className="flex-1/3">
                        <CatgoriesGrid />
                        <div className="most_reads">
                            <h4 className="text-2xl my-7">Most Reads</h4>
                            <RoundImageCategoryTitle />
                        </div>
                        <div className="follow_us">
                            <h4 className="text-2xl my-7">Follow Us</h4>
                            <FollowUs />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditorsChoice;
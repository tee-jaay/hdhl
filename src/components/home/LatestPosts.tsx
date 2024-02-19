import Link from "next/link";
import AuthorAvatarNameLink from "../common/AuthorAvatarNameLink";
import PublishMonthDateYear from "../common/PublishMonthDateYear";
import CommentsCount from "../common/CommentsCount";
import SectionHeading from "../common/SectionHeading";
import RoundImageCategoryTitle from "../common/RoundImageCategoryTitle";

const LatestPosts = () => {
    return (
        <section className="flex mx-auto" style={{ width: "1120px" }}>
            <div className="flex-1">
                <SectionHeading color={"text-[#000000]"} text={"Latest Posts"} />
                <div className="hero_left flex-1 bg-no-repeat bg-center" style={{ backgroundImage: `url("https://picsum.photos/1980/1100")`, height: '500px' }}>
                    <div className={`hero_one_item px-12 py-8 flex flex-col justify-end h-full`}>
                        <Link href={"/categories/category-slug"} title="lifestyle">
                            <span className="category bg-[#AE0332] text-white px-3 py-1 max-w-max">lifestyle</span>
                        </Link>
                        <Link href={"/post-slug"} title="Lorem ipsum dolor sit amet consectetur adipisicing elit">
                            <h1 className="title text-3xl text-white font-semibold my-3 hover:text-[#4ce5a2] transition ease-in-out duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                        </Link>
                        <div className="meta flex space-x-6">
                            <AuthorAvatarNameLink imgAlt={""} imgSrc={"https://i.pravatar.cc/20?q=0"} link={"/author/author-slug"} name={"Jon Deo"} textColor={"text-[#FFFFFF]"} />
                            <PublishMonthDateYear color="text-[#FFFFFF]" dateMDY="June 22, 2022" />
                            <CommentsCount color="text-[#FFFFFF]" count={"45"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1/3">
                <button className="flex ml-auto text-sm capitalize py-2 px-4 text-white bg-black hover:bg-[#4ce5a2] transition ease-in-out duration-300">view all</button>
                <div className=" ml-8 mt-6">
                    <RoundImageCategoryTitle />
                </div>
            </div>
        </section>
    );
}

export default LatestPosts;
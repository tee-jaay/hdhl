import Link from "next/link";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getLatestPosts from "@/_lib/graphQl/queries/getLatestPosts";
import formatDate from "@/_helpers/formatPostDate";
import AuthorAvatarNameLink from "../common/AuthorAvatarNameLink";
import PublishMonthDateYear from "../common/PublishMonthDateYear";
import CommentsCount from "../common/CommentsCount";
import SectionHeading from "../common/SectionHeading";
import CategoryBoxBg from "../common/CategoryBoxBg";
import LatestPostsRoundImageList from "../common/LatestPostsRoundImageList";

const getData = async () => {
    // Construct the query and variables
    const query = getLatestPosts();
    const variables = {};
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

const LatestPosts = async () => {
    const data = await getData();
    const postsWithoutFirst = data.slice(1);

    return (
        <section className="mx-auto" style={{ width: "1024px" }}>
            <div className="flex space-x-8 ">
                <div className="flex-1">
                    <SectionHeading color={"text-[#000000]"} text={"Latest Posts"} />
                    <div className="hero_left flex-1 bg-no-repeat bg-center" style={{ backgroundImage: `url(${data[0]?.featuredImage?.node?.sourceUrl})`, height: '500px' }}>
                        <div className={`hero_one_item px-12 py-8 flex flex-col justify-end h-full`}>
                            <CategoryBoxBg bgColor={"bg-[#AE0332]"} name={data[0]?.categories?.nodes[0]?.name} slug={data[0]?.categories?.nodes[0]?.slug} />
                            <Link href={data && data[0]?.slug} title={data && data[0]?.title}>
                                <h1 className="title text-3xl text-white font-semibold my-3 hover:text-[#4ce5a2] transition ease-in-out duration-300">{data && data[0]?.title}</h1>
                            </Link>
                            <div className="meta flex space-x-6">
                                <AuthorAvatarNameLink imgAlt={data[0]?.author?.node?.name} imgSrc={"https://i.pravatar.cc/20?q=0"} link={data[0]?.author?.node?.slug} name={data[0]?.author?.node?.name} textColor={"text-[#FFFFFF]"} />
                                <PublishMonthDateYear color="text-[#FFFFFF]" dateMDY={data && formatDate(data[0]?.date, "numeric")} />
                                <CommentsCount color="text-[#FFFFFF]" count={data && data[0]?.commentCount} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-80">
                    <span>
                        <Link href={"blog"} className="flex ml-auto w-16 text-sm capitalize py-2 px-2 cursor-pointer text-white bg-black hover:bg-[#4ce5a2] transition ease-in-out duration-300" >
                            view all
                        </Link>
                    </span>
                    <div className="mt-6 ">
                        <LatestPostsRoundImageList posts={postsWithoutFirst} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LatestPosts;
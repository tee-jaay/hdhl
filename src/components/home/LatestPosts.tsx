import React from "react";
import Link from "next/link";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getLatestPosts from "@/_lib/graphQl/queries/getLatestPosts";
import formatDate from "@/_lib/helpers/formatPostDate";
import AuthorAvatarNameLink from "../common/AuthorAvatarNameLink";
import PublishMonthDateYear from "../common/PublishMonthDateYear";
import CommentsCount from "../common/CommentsCount";
import SectionHeading from "../common/SectionHeading";
import CategoryBoxBg from "../common/CategoryBoxBg";
import LatestPostsRoundImageList from "../common/LatestPostsRoundImageList";

const getData = async (cursors: { startCursor: string, endCursor: string }) => {
    // Construct the query and variables
    const query = getLatestPosts();
    const variables = { limit: 5, startCursor: cursors.startCursor || "", endCursor: cursors.endCursor || "" };
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

const LatestPosts: React.FC<{}> = async () => {
    const data = await getData({ startCursor: "", endCursor: "" });
    const postsWithoutFirst = data.slice(1);

    return (
        <section className="phone:px-4 tab:px-0 laptop:px-0 laptop:w-[768px] desktop:w-[1024px] mx-auto">
            <div className="flex phone:flex-col laptop:flex-row tab:space-x-8">
                <div className="flex-1 phone:w-full tab:w-4/6 ">
                    <SectionHeading color={"text-[#222]"} text={"Latest Posts"} />
                    <div className="hero_left laptop:h-[400px] desktop:h-[500px] flex-1 bg-no-repeat top-0 left-0" style={{ backgroundImage: `url(${data[0]?.featuredImage?.node?.sourceUrl})` }}>
                        <div className={`hero_one_item px-12 py-8 flex flex-col justify-end h-full bg-gradient-to-b from-transparent to-black`}>
                            <CategoryBoxBg color="" count={0} id="" imgSrc="" bgColor={"bg-[#AE0332]"} name={data[0]?.categories?.nodes[0]?.name} slug={data[0]?.categories?.nodes[0]?.slug} />
                            <Link href={data && data[0]?.slug} title={data && data[0]?.title}>
                                <h1 className="title phone:text-lg tab:text-lg laptop:text-2xl desktop:text-3xl text-white font-semibold my-3 hover:text-[#43A047] transition ease-in-out duration-200">{data && data[0]?.title}</h1>
                            </Link>
                            <div className="meta flex space-x-6">
                                <AuthorAvatarNameLink imgAlt={data[0]?.author?.node?.name} imgSrc={data[0]?.author?.node?.avatar?.url} link={data[0]?.author?.node?.slug} name={data[0]?.author?.node?.name} textColor={"text-[#FFFFFF]"} imgSize={20} />
                                <PublishMonthDateYear color="text-[#FFFFFF]" dateMDY={data && formatDate(data[0]?.date, "numeric")} />
                                <div className="phone:hidden tab:block">
                                    <CommentsCount color="text-[#FFFFFF]" count={data && data[0]?.commentCount} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="phone:w-full phone:mt-8 tab:w-2/6 laptop:w-2/6 desktop:w-2/6">
                    <span>
                        <Link href={"blog"} className="flex tab:ml-auto laptop:ml-auto desktop:ml-auto w-16 text-sm capitalize py-2 px-2 cursor-pointer text-white bg-[#222] hover:bg-[#43A047] transition ease-in-out duration-200">
                            view all
                        </Link>
                    </span>
                    <div className="mt-6">
                        <LatestPostsRoundImageList posts={postsWithoutFirst} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LatestPosts;
"use client";

import Link from "next/link";

import formatDate from "@/_lib/helpers/formatPostDate";
import HeroPostProps from "@/_lib/models/HeroPostProps";
import AuthorAvatarNameLink from "@/components/common/AuthorAvatarNameLink";
import CategoryBoxBg from "@/components/common/CategoryBoxBg";
import CommentsCount from "@/components/common/CommentsCount";
import PublishMonthDateYear from "@/components/common/PublishMonthDateYear";

const HeroBig = ({ post }: { post: HeroPostProps }) => {
    return (
        <div className="hero_left bg-no-repeat tab:w-1/2 laptop:w-1/2" style={{ backgroundImage: `url(${post?.featuredImage?.node?.sourceUrl})` }}>
            <div className={`hero_one_item px-12 py-6 flex flex-col justify-end h-full bg-gradient-to-b from-transparent to-black`}>
                <CategoryBoxBg color="" count={0} id="" imgSrc="" bgColor={"bg-[#AE0332]"} name={post?.categories?.nodes[0]?.name} slug={post?.categories?.nodes[0]?.slug} />
                <Link href={post?.slug} title={post?.title}>
                    <h1 className="title phone:text-base tab:text-xl laptop:text-2xl desktop:text-3xl phone:line-clamp-2 laptop:line-clamp-3 text-white font-semibold my-3 hover:text-[#43A047] transition ease-in-out duration-200">{post?.title}</h1>
                </Link>
                <div className="meta flex space-x-6">
                    <div className="desktop:block">
                        <AuthorAvatarNameLink imgAlt={post?.author?.node?.name} imgSrc={post?.author?.node?.avatar?.url} link={post?.author?.node?.slug} name={post?.author?.node?.name} textColor={"text-[#FFFFFF]"} imgSize={20} />
                    </div>
                    <div className="desktop:block">
                        <PublishMonthDateYear color="text-[#FFFFFF]" dateMDY={formatDate(post?.date, "numeric")} />
                    </div>
                    <div className="phone:hidden tab:hidden laptop:block desktop:block">
                        <CommentsCount color="text-[#FFFFFF]" count={post?.commentCount} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroBig;
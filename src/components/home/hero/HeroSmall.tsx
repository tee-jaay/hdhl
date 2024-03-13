import Link from "next/link";

import HeroPostProps from "@/_lib/models/HeroPostProps";
import AuthorAvatarNameLink from "@/components/common/AuthorAvatarNameLink";
import CategoryBoxBg from "@/components/common/CategoryBoxBg";

const HeroSmall = ({ post }: { post: HeroPostProps }) => {
    return (
        <div className={`flex flex-col justify-end text-white flex-1 pb-6 bg-no-repeat`}
            style={{ backgroundImage: `url(${post?.featuredImage?.node?.sourceUrl})` }}>
            <div className="py-5 px-6 bg-gradient-to-b from-transparent to-black">
                <CategoryBoxBg color="" count={0} id="" imgSrc="" bgColor={"bg-[#ffa100]"} name={post?.categories?.nodes[0]?.name} slug={post?.categories?.nodes[0]?.slug} />
                <Link href={`/${post?.slug}`} title={`${post?.title}`}>
                    <h4 className="title tab:text-base laptop:text-lg desktop:text-2xl laptop:line-clamp-1 text-white font-semibold my-3 hover:text-[#43A047] transition ease-in-out duration-200">{post?.title}</h4>
                </Link>
                <AuthorAvatarNameLink imgAlt={post?.author?.node?.name} imgSrc={post?.author?.node?.avatar?.url} link={post?.author?.node?.slug} name={post?.author?.node?.name} textColor="text-[#FFFFFF]" imgSize={20} />
            </div>
        </div>
    );
}

export default HeroSmall;
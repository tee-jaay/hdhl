import Link from "next/link";

import formatDate from "@/_helpers/formatPostDate";
import HeroPostProps from "@/_models/HeroPostProps";
import AuthorAvatarNameLink from "@/components/common/AuthorAvatarNameLink";
import CategoryBoxBg from "@/components/common/CategoryBoxBg";
import CommentsCount from "@/components/common/CommentsCount";
import PublishMonthDateYear from "@/components/common/PublishMonthDateYear";

const HeroBig = ({ post }: { post: HeroPostProps }) => {
    return (
        <div className="hero_left flex-1 bg-no-repeat bg-center" style={{ backgroundImage: `url(${post?.featuredImage?.node?.sourceUrl})`, height: '580px' }}>
            <div className={`hero_one_item px-12 py-8 flex flex-col justify-end h-full bg-gradient-to-b from-transparent to-black`}>
                <CategoryBoxBg bgColor={"bg-[#AE0332]"} name={post?.categories?.nodes[0]?.name} slug={post?.categories?.nodes[0]?.slug} />
                <Link href={post?.slug} title={post?.title}>
                    <h1 className="title text-3xl text-white font-semibold my-3 hover:text-[#4ce5a2] transition ease-in-out duration-300">{post?.title}</h1>
                </Link>
                <div className="meta flex space-x-6">
                    <AuthorAvatarNameLink imgAlt={post?.author?.node?.name} imgSrc={post?.author?.node?.avatar?.url} link={post?.author?.node?.slug} name={post?.author?.node?.name} textColor={"text-[#FFFFFF]"} imgSize={20} />
                    <PublishMonthDateYear color="text-[#FFFFFF]" dateMDY={formatDate(post?.date, "numeric")} />
                    <CommentsCount color="text-[#FFFFFF]" count={post?.commentCount} />
                </div>
            </div>
        </div>
    );
}

export default HeroBig;
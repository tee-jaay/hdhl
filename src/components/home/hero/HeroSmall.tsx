import Link from "next/link";

import HeroPostProps from "@/_models/HeroPostProps";
import AuthorAvatarNameLink from "@/components/common/AuthorAvatarNameLink";
import CategoryBoxBg from "@/components/common/CategoryBoxBg";

const HeroSmall = ({ post }: { post: HeroPostProps }) => {
    return (
        <div className={`flex flex-col justify-end text-white flex-1 py-5 px-6 bg-no-repeat bg-center`} style={{ backgroundImage: `url(${post?.featuredImage?.node?.sourceUrl})`, height: '266px' }}>
            <CategoryBoxBg bgColor={"bg-[#ffa100]"} name={post?.categories?.nodes[0]?.name} slug={post?.categories?.nodes[0]?.slug} />
            <Link href={`/${post?.slug}`} title={`${post?.title}`}>
                <h4 className="title text-2xl text-white font-semibold my-3 hover:text-[#4ce5a2] transition ease-in-out duration-300">{post?.title}</h4>
            </Link>
            <AuthorAvatarNameLink imgAlt={post?.author?.node?.name} imgSrc={post?.author?.node?.avatar?.url} link={post?.author?.node?.slug} name={post?.author?.node?.name} textColor="text-[#FFFFFF]" imgSize={20} />
        </div>
    );
}

export default HeroSmall;
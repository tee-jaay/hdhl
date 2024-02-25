import Link from "next/link";

import formatDate from "@/_helpers/formatPostDate";
import HeroPostProps from "@/_models/HeroPostProps"
import AuthorAvatarNameLink from "@/components/common/AuthorAvatarNameLink";
import CategoryBoxBg from "@/components/common/CategoryBoxBg";
import CommentsCount from "@/components/common/CommentsCount";
import PublishMonthDateYear from "@/components/common/PublishMonthDateYear";


const HeroMedium = ({ post }: { post: HeroPostProps }) => {
  return (
    <div className={`flex flex-col flex-1 h-1/2 py-10 px-6 bg-no-repeat bg-center justify-end`} style={{ backgroundImage: `url(${post?.featuredImage?.node?.sourceUrl})` }}>
      <CategoryBoxBg bgColor={"bg-[#378e1c]"} name={post?.categories?.nodes[0]?.name} slug={post?.categories?.nodes[0]?.slug} />
      <Link href={`/${post?.slug}`} title={post?.title}>
        <h2 className="title text-2xl text-white font-semibold my-3 hover:text-[#4ce5a2] transition ease-in-out duration-300">{post?.title}</h2>
      </Link>
      <div className="meta flex space-x-6">
        <AuthorAvatarNameLink imgAlt={post?.author?.node?.name} imgSrc={post?.author?.node?.avatar?.url} link={post?.author?.node?.slug} name={post?.author?.node?.name} textColor="text-[#FFFFFF]" imgSize={20} />
        <PublishMonthDateYear color="text-[#FFFFFF]" dateMDY={formatDate(post?.date, "numeric")} />
        <CommentsCount color="text-[#FFFFFF]" count={post?.commentCount} />
      </div>
    </div>
  );
}

export default HeroMedium;
import Link from "next/link";

import formatDate from "@/_lib/helpers/formatPostDate";
import HeroPostProps from "@/_lib/models/HeroPostProps"
import AuthorAvatarNameLink from "@/components/common/AuthorAvatarNameLink";
import CategoryBoxBg from "@/components/common/CategoryBoxBg";
import CommentsCount from "@/components/common/CommentsCount";
import PublishMonthDateYear from "@/components/common/PublishMonthDateYear";


const HeroMedium = ({ post }: { post: HeroPostProps }) => {
  return (
    <div className={`flex h-full justify-end`} style={{ backgroundImage: `url(${post?.featuredImage?.node?.sourceUrl})` }}>
      <div className="w-full flex flex-col py-6 px-6 justify-end bg-gradient-to-b from-transparent to-black">
        <CategoryBoxBg color="" count={0} id="" imgSrc="" bgColor={"bg-[#378e1c]"} name={post?.categories?.nodes[0]?.name} slug={post?.categories?.nodes[0]?.slug} />
        <Link href={`/${post?.slug}`} title={post?.title}>
          <h2 className="title md:text-xl lg:text-2xl md:line-clamp-1 text-white font-semibold my-3 hover:text-[#43A047] transition ease-in-out duration-300">{post?.title}</h2>
        </Link>
        <div className="meta flex space-x-6">
          <div className="lg:block">
            <AuthorAvatarNameLink imgAlt={post?.author?.node?.name} imgSrc={post?.author?.node?.avatar?.url} link={post?.author?.node?.slug} name={post?.author?.node?.name} textColor="text-[#FFFFFF]" imgSize={20} />
          </div>
          <div className="lg:block">
            <PublishMonthDateYear color="text-[#FFFFFF]" dateMDY={formatDate(post?.date, "numeric")} />
          </div>
          <div className="md:hidden lg:block">
            <CommentsCount color="text-[#FFFFFF]" count={post?.commentCount} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroMedium;
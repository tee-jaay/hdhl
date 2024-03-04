import Image from "next/image"
import Link from "next/link"

import PostCardProps from "@/_models/PostCardProps"
import formatDate from "@/_helpers/formatPostDate"
import AuthorAvatarNameLink from "@/components/common/AuthorAvatarNameLink"
import CommentsCount from "@/components/common/CommentsCount"
import PublishMonthDateYear from "@/components/common/PublishMonthDateYear"

const PostSingleCard = ({ post }: { post: PostCardProps }) => <div className="post_single shadow-md pb-8">
    <div className="post_image">
        <Image src={post?.featuredImage?.node?.sourceUrl} alt={post?.featuredImage?.node?.altText} height={600} width={1200} />
    </div>
    <div className="post_meta px-6">
        <div className="meta flex space-x-6 my-8">
            <AuthorAvatarNameLink imgAlt={post?.author?.node?.name} imgSrc={post?.author?.node?.avatar?.url} link={post?.author?.node?.slug} name={post?.author?.node?.name} textColor={"text-[#000]"} imgSize={30} />
            <PublishMonthDateYear color="text-[#777]" dateMDY={formatDate(post?.date, "numeric")} />
            <CommentsCount color="text-[#777]" count={post?.commentCount ? post.commentCount.toString() : "0"} />
        </div>
        <h1 className="post_title font-medium text-4xl">
            {post?.title}
        </h1>
        <div className="post_excerpt text-[#777]" dangerouslySetInnerHTML={{ __html: post?.excerpt ?? "" }} />
        <div className="post_read_more mt-7">
            <Link href={post?.slug} className="capitalize text-[#000] border border-[#e2e2e2] py-2 px-7 hover:text-[#4ce5a2] hover:border-[#4ce5a2] transition ease-in-out duration-300">read more</Link>
        </div>
    </div>
</div>

export default PostSingleCard;
import React from "react";
import Link from "next/link";
import Image from "next/image";

import PostCardProps from "@/_lib/models/PostCardProps";
import truncateString from "@/_lib/helpers/truncrateString";
import AuthorAvatarNameLink from "@/components/common/AuthorAvatarNameLink";
import CategoryBoxBg from "@/components/common/CategoryBoxBg";

const categoryBgColors: { [key: number]: string } =
{
  0: "bg-[#f19066]",
  1: "bg-[#546de5]",
  2: "bg-[#e66767]",
  3: "bg-[#303952]",
  4: "bg-[#c44569]",
  5: "bg-[#3dc1d3]",
}

const PostsList: React.FC<{ posts: PostCardProps[] }> = ({ posts }) => {
  return (
    <div className="posts space-y-8">
      {posts && posts.map((post, i) => (
        <div key={post.id} className="post flex space-x-8 bg-[#FFFFFF] dark:bg-[#222] pr-8">
          <div className="post_image w-1/3">
            <Image alt={post?.featuredImage?.node?.altText}
              src={post?.featuredImage?.node?.sourceUrl}
              width={220}
              height={220}
            />
          </div>
          <div className="post_info w-2/3 space-y-2 py-4">
            <CategoryBoxBg
              color=""
              count={0}
              id=""
              imgSrc=""
              bgColor={categoryBgColors[i % Object.keys(categoryBgColors).length]}
              name={post?.categories?.nodes[0]?.name}
              slug={post?.categories?.nodes[0]?.slug} />
            <div>
              <Link href={post?.slug} title={post?.title}>
                <h4 className="phone:text-sm tab:text-base laptop:text-xl tab:line-clamp-1 desktop:line-clamp-2 text-black dark:text-white hover:text-[#43A047] dark:hover:text-[#43A047] transition ease-in-out duration-200">{truncateString(post?.title, 33)}</h4>
              </Link>
            </div>
            <h6 className="text-gray-500 dark:text-white tab:line-clamp-1 desktop:line-clamp-3" dangerouslySetInnerHTML={{ __html: truncateString(post?.excerpt, 120) }} />
            <div>
              <AuthorAvatarNameLink imgAlt={post?.author?.node?.name} imgSrc={post?.author?.node?.avatar?.url} link={post?.author?.node?.slug} name={post?.author?.node?.name} textColor="text-[#222]" imgSize={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
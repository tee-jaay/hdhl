import React from "react";
import Link from "next/link";
import Image from "next/image";

import truncateString from "@/_lib/helpers/truncrateString";
import AuthorAvatarNameLink from "@/components/common/AuthorAvatarNameLink";
import CategoryBoxBg from "@/components/common/CategoryBoxBg";
import PostCardProps from "@/_lib/models/PostCardProps";

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
          <div className="post_image flex-1/2">
            <Image alt={post?.featuredImage?.node?.altText}
              src={post?.featuredImage?.node?.sourceUrl}
              width={220}
              height={220}
            />
          </div>
          <div className="post_info flex-1 space-y-2 py-4">
            <CategoryBoxBg
              bgColor={categoryBgColors[i % Object.keys(categoryBgColors).length]}
              name={post?.categories?.nodes[0]?.name} slug={post?.categories?.nodes[0]?.slug} />
            <div>
              <Link href={post?.slug} title={post?.title}>
                <h4 className="text-xl text-black dark:text-white hover:text-[#43A047] dark:hover:text-[#43A047] transition ease-in-out duration-300">{truncateString(post?.title, 33)}</h4>
              </Link>
            </div>
            <h6 className="text-gray-500 dark:text-white" dangerouslySetInnerHTML={{ __html: truncateString(post?.excerpt, 120) }} />
            <div>
              <AuthorAvatarNameLink imgAlt={post?.author?.node?.name} imgSrc={post?.author?.node?.avatar?.url} link={post?.author?.node?.slug} name={post?.author?.node?.name} textColor="text-[#000000]" imgSize={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
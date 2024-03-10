import React from "react";

import PostCardProps from "@/_lib/models/PostCardProps";
import ReadMore from "../../common/blog/posts/ReadMore";
import FeaturedImage from "./FeaturedImage";
import PostMeta from "./PostMeta";
import PostTitle from "../../common/blog/posts/PostTitle";
import PostExcerpt from "./PostExcerpt";

const PostSingleCard: React.FC<{ post: PostCardProps }> = ({ post }) => <div className="post_single shadow-md pb-8">
    <FeaturedImage sourceUrl={post?.featuredImage?.node?.sourceUrl} altText={post?.featuredImage?.node?.altText} />
    <div className="post_data px-6">
        <PostMeta
            authorName={post?.author?.node?.name}
            authorAvatar={post?.author?.node?.avatar?.url}
            authorSlug={post?.author?.node?.slug}
            commentCount={post?.commentCount}
            date={post?.date}
        />
        <PostTitle title={post?.title} />
        <PostExcerpt excerpt={post?.excerpt} />
        <ReadMore slug={post?.slug} />
    </div>
</div>

export default PostSingleCard;
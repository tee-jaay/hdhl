"use client";

import PostCardProps from "@/_lib/models/PostCardProps";
import PostSingleCard from "./PostSingleCard";

const PostsList = ({ posts }: { posts: PostCardProps[] }) => {
    return (
        <div className="posts_list space-y-9">
            {posts && posts.map((post: PostCardProps, _id: number) => <PostSingleCard key={post.id} post={post} />)}
            {posts.length < 1 && <p className="dark:text-white">No published post yet.</p>}
        </div>
    );
}

export default PostsList;
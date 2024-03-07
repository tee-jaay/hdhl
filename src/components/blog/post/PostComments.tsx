import React from "react";

import PostComment from "@/_lib/models/PostComment";
import CommentsList from "./comments/CommentsList";
import CommentForm from "./comments/CommentForm";

const PostComments: React.FC<{ comments: PostComment[], postId: number }> = ({ comments, postId }) => {
    return (
        <div className="comments py-6">
            <h3 className="capitalize font-medium text-[#000] dark:text-white">comments</h3>
            <CommentsList comments={comments} />
            <CommentForm postId={postId} />
        </div>
    );
}

export default PostComments;
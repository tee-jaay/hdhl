import React from "react";
import Image from "next/image";

import formatDate from "@/_lib/helpers/formatPostDate";
import PostComment from "@/_lib/models/PostComment";

const PostComment: React.FC<{ comment: PostComment }> = ({ comment }) => <div className="comment_single flex space-x-4 border-b-2 pb-6">
    <div className="commenter_avatar w-1/12">
        <Image
            src={comment?.author?.node?.avatar?.url ?? "https://i.pravatar.cc/80"}
            alt={comment?.author?.node?.name}
            width={80}
            height={80}
            className="rounded-full"
        />
    </div>
    <div className="comment space-y-2 w-11/12">
        <div className="commenter_name dark:text-white capitalize font-medium text-lg">{comment?.author?.node?.name}</div>
        <div className="comment_date dark:text-[#FEFEFE]">{formatDate(comment?.date, "numeric")}</div>
        <div className="comment_text text-[#444] dark:text-white font-light" dangerouslySetInnerHTML={{ __html: comment?.content ?? "" }} />
    </div>
</div>

const CommentsList: React.FC<{ comments: PostComment[] }> = ({ comments }) => {
    return (
        <div className="comments_list space-y-8">
            {comments && comments.map((comment, _i) => <PostComment key={comment.id} comment={comment} />)}
            {comments.length < 1 && <p className="dark:text-white">No comment yet.</p>}
        </div>
    );
}

export default CommentsList;
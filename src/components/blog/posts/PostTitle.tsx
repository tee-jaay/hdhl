import React from "react";

const PostTitle: React.FC<{ title: string }> = ({ title }) => {
    return (
        <h1 className="post_title font-medium phone:text-xl tab:text-2xl laptop:text-3xl desktop:text-4xl dark:text-white">
            {title}
        </h1>
    );
}

export default PostTitle;
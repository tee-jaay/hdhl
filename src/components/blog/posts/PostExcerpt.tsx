import React from "react";

const PostExcerpt: React.FC<{ excerpt: string }> = ({ excerpt }) => {
    return (
        <div className="post_excerpt text-[#777] dark:text-white" dangerouslySetInnerHTML={{ __html: excerpt ?? "" }} />
    );
}

export default PostExcerpt;
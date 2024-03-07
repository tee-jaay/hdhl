import Link from "next/link";

import TagProps from "@/_lib/models/TagProps";
import React from "react";

interface Tags { tags: TagProps[] }

const PostTags: React.FC<Tags> = ({ tags }) => {
    return (
        <div className="tags_links flex flex-wrap items-start">
            {tags?.map((tag, _i) => (
                <div key={tag.slug} className="mr-1 mb-2 text-xs">
                    <Link title={tag.name} href={`/tags/${tag.slug}/12`}>
                        <span className="capitalize text-[#444444] dark:text-[#FEFEFE] border border-[#cccccc] py-1 px-4">
                            {tag.name}
                        </span>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default PostTags;
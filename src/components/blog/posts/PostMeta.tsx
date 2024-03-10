import React from "react";

import formatDate from "@/_lib/helpers/formatPostDate";
import AuthorAvatarNameLink from "@/components/common/AuthorAvatarNameLink";
import CommentsCount from "@/components/common/CommentsCount";
import PublishMonthDateYear from "@/components/common/PublishMonthDateYear";

const PostMeta: React.FC<{ authorName: string, authorAvatar: string, authorSlug: string, date: string, commentCount: number }> = ({ authorName, authorAvatar, authorSlug, date, commentCount }) => {
    return (
        <div className="meta flex space-x-6 my-8">
            <AuthorAvatarNameLink imgAlt={authorName} imgSrc={authorAvatar} link={authorSlug} name={authorName} textColor={"text-[#000]"} imgSize={30} />
            <PublishMonthDateYear color="text-[#777]" dateMDY={formatDate(date, "numeric")} />
            <div className="phone:hidden tab:block">
                <CommentsCount color="text-[#777]" count={commentCount ? commentCount.toString() : "0"} />
            </div>
        </div>
    );
}

export default PostMeta;
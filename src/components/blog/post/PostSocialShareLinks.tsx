import React from "react";
import SocialShareButtons from "./SocialShareButtons";

const PostSocialShareLinks: React.FC<{ slug: string, title: string, imgSrc: string }> = ({ slug, title, imgSrc }) => {
    return (
        <div className="share_links flex items-start">
            <h6 className="font-medium mr-4 text-lg text-[#444444] dark:text-white">Share:</h6>
            <SocialShareButtons url={`${process.env.NEXT_PUBLIC_APP_URL}/${slug}`} title={title} media={imgSrc} />
        </div>
    );
}

export default PostSocialShareLinks;
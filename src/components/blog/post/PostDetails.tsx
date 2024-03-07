import React from "react";
import Image from "next/image";

import PostData from "@/_lib/models/PostData";
import PostFeaturedImage from "@/_lib/models/PostFeaturedImage";

const PostDetails: React.FC<{ data: PostData, image: PostFeaturedImage }> = ({ data, image }) => {
    return (
        <>
            <div className="post_image w-full">
                <Image
                    alt={image?.node?.altText}
                    src={image?.node?.sourceUrl}
                    width={900}
                    height={500}
                />
            </div>
            <div className="content mt-8 text-[#444] dark:text-white">
                <div dangerouslySetInnerHTML={{ __html: data ?? "" }} />
            </div>
        </>
    );
}

export default PostDetails;
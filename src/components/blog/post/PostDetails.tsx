import React from "react";
import Image from "next/image";
import PostDataProps from "@/_lib/models/PostDataProps";
import PostFeaturedImageProps from "@/_lib/models/PostFeaturedImageProps";

const PostDetails: React.FC<{ data: PostDataProps, image: PostFeaturedImageProps }> = ({ data, image }) => {
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
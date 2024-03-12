import React from "react";
import Image from "next/image";

const FeaturedImage: React.FC<{ sourceUrl: string, altText: string }> = ({ sourceUrl, altText }) => {
    return (
        <div className="post_image">
            <Image src={sourceUrl} alt={altText} height={600} width={1200} loading="lazy" />
        </div>
    );
}

export default FeaturedImage;
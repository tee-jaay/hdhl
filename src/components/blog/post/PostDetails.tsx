import Image from "next/image";

interface FeaturedImage {
    node: {
        altText: string,
        sourceUrl: string,
    }
}

interface Data {
    content: string,
}

const PostDetails = ({ data, image }: { data: Data, image: FeaturedImage }) => {
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
            <div className="content mt-8 text-[#444]">
                <div dangerouslySetInnerHTML={{ __html: data ?? "" }} />
            </div>
        </>
    );
}

export default PostDetails;
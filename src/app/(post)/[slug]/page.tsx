import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, } from "@fortawesome/free-brands-svg-icons";

import gqlQuery from "@/_lib/graphQl/gqlQuery";
import getPostBySlug from "@/_lib/graphQl/queries/getPostBySlug";
import truncateString from "@/_helpers/truncrateString";

const getData = async (params: string) => {
    // Construct the query and variables
    const query = getPostBySlug();
    const variables = {
        slug: params,
    };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

interface Tag {
    name: string,
    slug: string,
}

const Post = async ({ params }: { params: { slug: string } }) => {
    const { post } = await getData(params.slug);
    return (
        <div className="flex flex-col">
            <div className="post_image w-full">
                <Image
                    alt={post?.featuredImage?.node?.altText}
                    src={post?.featuredImage?.node?.sourceUrl}
                    width={900}
                    height={500}
                />
            </div>
            <div className="content mt-8 text-[#444]">
                <div dangerouslySetInnerHTML={{ __html: post?.content }} />
            </div>
            <hr className="mt-10 mb-6" />
            <div className="tags_share_links flex justify-between">
                <div className="tags flex">
                    <h6 className="font-medium mr-4 text-lg text-[#444444]">Tags:</h6>
                    <div className="tags_links flex flex-wrap items-start">
                        {post?.tags?.nodes?.map((tag: Tag, _i: number) => (
                            <div key={tag.slug} className="mr-1 mb-2 text-xs">
                                <Link title={tag.name} href={`/tags/${tag.slug}`}>
                                    <span className="capitalize text-[#444444] border border-[#cccccc] py-1 px-4">
                                        {tag.name}
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="share_links flex items-start">
                        <h6 className="font-medium mr-4 text-lg text-[#444444]">Share:</h6>
                        <div className="social_links flex space-x-3 align-middle">
                            <Link href={"/"}>
                                <div className="w-8 h-8 p-2 border">
                                    <FontAwesomeIcon color="#444" icon={faFacebook} />
                                </div>
                            </Link>
                            <Link href={"/"}>
                                <div className="w-8 h-8 p-2 border">
                                    <FontAwesomeIcon color="#444" icon={faXTwitter} />
                                </div>
                            </Link>
                            <Link href={"/"}>
                                <div className="w-8 h-8 p-2 border">
                                    <FontAwesomeIcon color="#444" icon={faInstagram} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="author flex space-x-6 bg-[#F9F9F9]  mt-14 py-9 px-8 ">
                <div className="avatar w-2/12">
                    <Image
                        alt={post?.author?.node?.name}
                        src={post?.author?.node?.avatar?.url}
                        width={200}
                        height={200}
                        className="rounded-full"
                    />
                </div>
                <div className="author-info flex flex-col w-10/12">
                    <div className="author_name text-2xl tracking-wide font-medium text-[#000]">{post?.author?.node?.name}</div>
                    <div className="author_bio text-[#505050]">{truncateString(post?.author?.node?.description, 240)}</div>
                    <div className="all_stories mt-2 text-[#000]">
                        All articles by: <Link href={`/author/${post?.author?.node?.slug}`} title={post?.author?.node?.name}>{post?.author?.node?.name}</Link>
                    </div>
                </div>
            </div>
            <div className="paginations">
                prev post next post
            </div>
            <div className="related_posts">
                related posts
            </div>
            <div className="comments">
                <div className="comments_list">
                    comments
                </div>
                <div className="comment_form">Leave a Comment</div>
            </div>
        </div>
    );
}

export default Post;
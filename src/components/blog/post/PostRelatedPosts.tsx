import Image from "next/image";
import Link from "next/link";

const PostRelatedPosts = () => {
    return (
        <div className="related_posts">
            <h3 className="capitalize font-medium text-[#000]">related posts</h3>
            <div className="posts flex space-x-4">
                <div className="post_item shadow-md">
                    <div className="post_image">
                        <Image alt="" src={"https://picsum.photos/290/300"} width={290} height={300} />
                    </div>
                    <div className="post_data px-4 pb-4">
                        <div className="post_date mt-7 text-[#999]">
                            April 12, 2022
                        </div>
                        <div className="post_title mt-1">
                            <Link href={"/"} title={"eiciendis soluta saepe natus ab delectus cum consectetur"}>
                                <div className="capitalize text-[#444] text-lg font-normal leading-tight hover:text-[#4ce5a2] transition ease-in-out duration-300">
                                    Eeiciendis soluta saepe natus ab delectus cum consectetur
                                </div>
                            </Link>
                        </div>
                        <div className="post_author flex items-center mt-4 space-x-4">
                            <div className="">
                                <Image className=" rounded-full" alt="" src={"https://i.pravatar.cc/40/40"} width={40} height={40} />
                            </div>
                            <div className="author_name">
                                <Link href={"/"} title="nina allwn">
                                    <span className="text-[#666] text-lg">Nina Allon</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post_item shadow-md">
                    <div className="post_image">
                        <Image alt="" src={"https://picsum.photos/290/300"} width={290} height={300} />
                    </div>
                    <div className="post_data px-4 pb-4">
                        <div className="post_date mt-7 text-[#999]">
                            April 12, 2022
                        </div>
                        <div className="post_title mt-1">
                            <Link href={"/"} title={"eiciendis soluta saepe natus ab delectus cum consectetur"}>
                                <div className="capitalize text-[#444] text-lg font-normal leading-tight hover:text-[#4ce5a2] transition ease-in-out duration-300">
                                    Eeiciendis soluta saepe natus ab delectus cum consectetur
                                </div>
                            </Link>
                        </div>
                        <div className="post_author flex items-center mt-4 space-x-4">
                            <div className="">
                                <Image className=" rounded-full" alt="" src={"https://i.pravatar.cc/40/40"} width={40} height={40} />
                            </div>
                            <div className="author_name">
                                <Link href={"/"}>
                                    <span className="text-[#666] text-lg">Nina Allon</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post_item shadow-md">
                    <div className="post_image">
                        <Image alt="" src={"https://picsum.photos/290/300"} width={290} height={300} />
                    </div>
                    <div className="post_data px-4 pb-4">
                        <div className="post_date mt-7 text-[#999]">
                            April 12, 2022
                        </div>
                        <div className="post_title mt-1">
                            <Link href={"/"} title={"eiciendis soluta saepe natus ab delectus cum consectetur"}>
                                <div className="capitalize text-[#444] text-lg font-normal leading-tight hover:text-[#4ce5a2] transition ease-in-out duration-300">
                                    Eeiciendis soluta saepe natus ab delectus cum consectetur
                                </div>
                            </Link>
                        </div>
                        <div className="post_author flex items-center mt-4 space-x-4">
                            <div className="">
                                <Image className=" rounded-full" alt="" src={"https://i.pravatar.cc/40/40"} width={40} height={40} />
                            </div>
                            <div className="author_name">
                                <Link href={"/"}>
                                    <span className="text-[#666] text-lg">Nina Allon</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostRelatedPosts;
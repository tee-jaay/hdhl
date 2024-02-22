import Image from "next/image";
import Link from "next/link";

const PostRelatedPosts = () => {
    return (
        <div className="related_posts">
            <h3 className="capitalize font-medium">related posts</h3>
            <div className="posts flex space-x-4">
                <div className="post_item shadow-md">
                    <div className="post_image">
                        <Image alt="" src={"https://picsum.photos/300/310"} width={300} height={310} />
                    </div>
                    <div className="post_data px-4 pb-4">
                        <div className="post_date mt-7 text-[#999]">
                            April 12, 2022
                        </div>
                        <div className="post_title mt-2">
                            <Link href={"/"} title={"eiciendis soluta saepe natus ab delectus cum consectetur"}>
                                <div className="capitalize text-[#444] text-lg font-normal hover:text-[#4ce5a2] transition ease-in-out duration-300">
                                    Eeiciendis soluta saepe natus ab delectus cum consectetur
                                </div>
                            </Link>
                        </div>
                        <div className="post_author flex items-center mt-6 space-x-4">
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
                        <Image alt="" src={"https://picsum.photos/300/310"} width={300} height={310} />
                    </div>
                    <div className="post_data px-4 pb-4">
                        <div className="post_date mt-7 text-[#999]">
                            April 12, 2022
                        </div>
                        <div className="post_title mt-2">
                            <Link href={"/"} title={"eiciendis soluta saepe natus ab delectus cum consectetur"}>
                                <div className="capitalize text-[#444] text-lg font-normal hover:text-[#4ce5a2] transition ease-in-out duration-300">
                                    Eeiciendis soluta saepe natus ab delectus cum consectetur
                                </div>
                            </Link>
                        </div>
                        <div className="post_author flex items-center mt-6 space-x-4">
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
                        <Image alt="" src={"https://picsum.photos/300/310"} width={300} height={310} />
                    </div>
                    <div className="post_data px-4 pb-4">
                        <div className="post_date mt-7 text-[#999]">
                            April 12, 2022
                        </div>
                        <div className="post_title mt-2">
                            <Link href={"/"} title={"eiciendis soluta saepe natus ab delectus cum consectetur"}>
                                <div className="capitalize text-[#444] text-lg font-normal hover:text-[#4ce5a2] transition ease-in-out duration-300">
                                    Eeiciendis soluta saepe natus ab delectus cum consectetur
                                </div>
                            </Link>
                        </div>
                        <div className="post_author flex items-center mt-6 space-x-4">
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
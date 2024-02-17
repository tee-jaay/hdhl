import Link from "next/link";
import AuthorAvatarNameLink from "../common/AuthorAvatarNameLink";
import PublishMonthDateYear from "../common/PublishMonthDateYear";
import CommentsCount from "../common/CommentsCount";
import Image from "next/image";

const LatestPosts = () => {
    return (
        <section className="flex mx-auto" style={{ width: '1200px' }}>
            <div className="flex-3/5 flex-grow ">
                <h2 className="text-3xl font-semibold">Latest Posts</h2>
                <div className="hero_left flex-1 bg-no-repeat bg-center mt-6" style={{ backgroundImage: `url("https://picsum.photos/1980/1100")`, height: '500px' }}>
                    <div className={`hero_one_item px-12 py-8 flex flex-col justify-end h-full`}>
                        <Link href={"/blog/categories/category-slug"} title="lifestyle">
                            <span className="category bg-[#AE0332] text-white px-3 py-1 max-w-max">lifestyle</span>
                        </Link>
                        <Link href={"/blog/post-slug"} title="Lorem ipsum dolor sit amet consectetur adipisicing elit">
                            <h1 className="title text-3xl text-white font-semibold my-3 hover:text-[#4ce5a2] transition ease-in-out duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                        </Link>
                        <div className="meta flex space-x-2">
                            <AuthorAvatarNameLink imgAlt={""} imgSrc={"https://i.pravatar.cc/20?q=0"} link={"/blog/author/author-slug"} name={"Jon Deo"} textColor={"text-[#FFFFFF]"} />
                            <PublishMonthDateYear color="text-[#FFFFFF]" dateMDY="June 22, 2022" />
                            <CommentsCount color="text-[#FFFFFF]" count={"45"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-2/5">
                <button className="flex ml-auto text-sm capitalize py-2 px-4 text-white bg-black hover:bg-[#4ce5a2] transition ease-in-out duration-300">view all</button>
                <div className="space-y-6 p-8">
                    <div className="flex space-x-3">
                        <div className="flex-1/5">
                            <Image className="rounded-full" src={"https://picsum.photos/100"} alt="" height={100} width={100} />
                        </div>
                        <div className="4/5">
                            <span>travel</span>
                            <h4>Natus voluptates asperiores facilis? Veniam, doloribus.</h4>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <div className="flex-1/5">
                            <Image className="rounded-full" src={"https://picsum.photos/100"} alt="" height={100} width={100} />
                        </div>
                        <div className="4/5">
                            <span>travel</span>
                            <h4>Natus voluptates asperiores facilis? Veniam, doloribus.</h4>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <div className="flex-1/5">
                            <Image className="rounded-full" src={"https://picsum.photos/100"} alt="" height={100} width={100} />
                        </div>
                        <div className="4/5">
                            <span>travel</span>
                            <h4>Natus voluptates asperiores facilis? Veniam, doloribus.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LatestPosts;
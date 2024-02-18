import Link from "next/link";
import AuthorAvatarNameLink from "../common/AuthorAvatarNameLink";
import PublishMonthDateYear from "../common/PublishMonthDateYear";
import CommentsCount from "../common/CommentsCount";
import Image from "next/image";
import CategoryNameSlug from "../common/CategoryNameSlug";
import SectionHeading from "../common/SectionHeading";

const latestPosts = [
    {
        title: "Lorem ipsum dolor sit amet",
        slug: "lorem-ipsum-dolor-sit-amet",
        category: "Technology",
        categorySlug: "technology",
        image: "https://picsum.photos/100?random=1",
    },
    {
        title: "Consectetur adipiscing elit",
        slug: "consectetur-adipiscing-elit",
        category: "Travel",
        categorySlug: "travel",
        image: "https://picsum.photos/100?random=2",
    },
    {
        title: "Sed do eiusmod tempor incididunt",
        slug: "sed-do-eiusmod-tempor-incididunt",
        category: "Politics",
        categorySlug: "politics",
        image: "https://picsum.photos/100?random=3",
    },
    {
        title: "Ut labore et dolore magna aliqua",
        slug: "ut-labore-et-dolore-magna-aliqua",
        category: "Sports",
        categorySlug: "sports",
        image: "https://picsum.photos/100?random=4",
    },
];

const LatestPosts = () => {
    return (
        <section className="flex mx-auto" style={{ width: "1120px" }}>
            <div className="flex-3/5 flex-grow ">
                <SectionHeading color={"text-[#000000]"} text={"Latest Posts"} />
                <div className="hero_left flex-1 bg-no-repeat bg-center" style={{ backgroundImage: `url("https://picsum.photos/1980/1100")`, height: '500px' }}>
                    <div className={`hero_one_item px-12 py-8 flex flex-col justify-end h-full`}>
                        <Link href={"/blog/categories/category-slug"} title="lifestyle">
                            <span className="category bg-[#AE0332] text-white px-3 py-1 max-w-max">lifestyle</span>
                        </Link>
                        <Link href={"/blog/post-slug"} title="Lorem ipsum dolor sit amet consectetur adipisicing elit">
                            <h1 className="title text-3xl text-white font-semibold my-3 hover:text-[#4ce5a2] transition ease-in-out duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                        </Link>
                        <div className="meta flex space-x-6">
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
                    {latestPosts && latestPosts.map((post, _i) => (
                        <div className="flex space-x-3" key={post.slug}>
                            <div className="flex-1/5">
                                <Image className="rounded-full" src={post.image} alt="" height={100} width={100} />
                            </div>
                            <div className="4/5">
                                <CategoryNameSlug color={"text-[#919191]"} name={post.category} slug={post.categorySlug} />
                                <h4 className="mt-2">
                                    <Link className="text-black hover:text-[#4ce5a2] transition ease-in-out duration-300" title={post.title} href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LatestPosts;
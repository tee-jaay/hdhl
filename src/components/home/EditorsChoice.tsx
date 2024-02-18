import Image from "next/image";
import SectionHeading from "../common/SectionHeading";
import CategoryBoxBg from "../common/CategoryBoxBg";
import AuthorAvatarNameLink from "../common/AuthorAvatarNameLink";
import Link from "next/link";

const posts = [
    {
        id: 1,
        imgAlt: "Shuffle Dance",
        imgSrc: "https://picsum.photos/300/300",
        categoryName: "Shuffle Dance",
        categorySlug: "shuffle-dance",
        categoryBgColor: "bg-[#574b90]",
        title: "♫ Dan Balan & Marley Waters",
        slug: "dan-balan-marley-waters",
        exercpt: "Numa Numa 2 - Lavrushkin & Eddie G Remix (SN Studio Edit) Shuffle Dance Video",
        authorSlug: "/blog/author/Ozone",
        authorName: "Ozone",
        authorImg: "https://i.pravatar.cc/80",
        date: "March 26, 2022"
    },
    {
        id: 2,
        imgAlt: "Shuffle Dance",
        imgSrc: "https://picsum.photos/300/300",
        categoryName: "Shuffle Dance",
        categorySlug: "shuffle-dance",
        categoryBgColor: "bg-[#f19066]",
        title: "♫ Dan Balan & Marley Waters",
        slug: "dan-balan-marley-waters",
        exercpt: "Numa Numa 2 - Lavrushkin & Eddie G Remix (SN Studio Edit) Shuffle Dance Video",
        authorSlug: "/blog/author/Ozone",
        authorName: "Ozone",
        authorImg: "https://i.pravatar.cc/80",
        date: "March 26, 2022"
    },
    {
        id: 3,
        imgAlt: "Shuffle Dance",
        imgSrc: "https://picsum.photos/300/300",
        categoryName: "Shuffle Dance",
        categorySlug: "shuffle-dance",
        categoryBgColor: "bg-[#3dc1d3]",
        title: "♫ Dan Balan & Marley Waters",
        slug: "dan-balan-marley-waters",
        exercpt: "Numa Numa 2 - Lavrushkin & Eddie G Remix (SN Studio Edit) Shuffle Dance Video",
        authorSlug: "/blog/author/Ozone",
        authorName: "Ozone",
        authorImg: "https://i.pravatar.cc/80",
        date: "March 26, 2022"
    },
    {
        id: 4,
        imgAlt: "Shuffle Dance",
        imgSrc: "https://picsum.photos/300/300",
        categoryName: "Shuffle Dance",
        categorySlug: "shuffle-dance",
        categoryBgColor: "bg-[#0652DD]",
        title: "♫ Dan Balan & Marley Waters",
        slug: "dan-balan-marley-waters",
        exercpt: "Numa Numa 2 - Lavrushkin & Eddie G Remix (SN Studio Edit) Shuffle Dance Video",
        authorSlug: "/blog/author/Ozone",
        authorName: "Ozone",
        authorImg: "https://i.pravatar.cc/80",
        date: "March 26, 2022"
    },
    {
        id: 5,
        imgAlt: "Shuffle Dance",
        imgSrc: "https://picsum.photos/300/300",
        categoryName: "Shuffle Dance",
        categorySlug: "shuffle-dance",
        categoryBgColor: "bg-[#6F1E51]",
        title: "♫ Dan Balan & Marley Waters",
        slug: "dan-balan-marley-waters",
        exercpt: "Numa Numa 2 - Lavrushkin & Eddie G Remix (SN Studio Edit) Shuffle Dance Video",
        authorSlug: "/blog/author/Ozone",
        authorName: "Ozone",
        authorImg: "https://i.pravatar.cc/80",
        date: "March 26, 2022"
    },
];

const EditorsChoice = () => {
    return (
        <section className="mx-auto py-16 bg-[#FBF8F5]">
            <div className="mx-auto" style={{ width: "1120px" }}>
                <div className="flex space-x-8  align-baseline">
                    <div className="flex-2">
                        <SectionHeading text="Editor's Choice" color="text-[#000000]" />
                        <div className="posts space-y-8">
                            {posts && posts.map((post, _i) => (
                                <div key={post.id} className="post flex space-x-8 bg-[#FFFFFF] pr-8">
                                    <div className="post_image">
                                        <Image alt={post.imgAlt} src={`${post.imgSrc}?q=${post.id}`}
                                            width={230}
                                            height={230}
                                        />
                                    </div>
                                    <div className="post_info space-y-4 py-4">
                                        <CategoryBoxBg bgColor={post.categoryBgColor} name={post.categoryName} slug={post.categorySlug} />
                                        <div>
                                            <Link href={`/blog/${post.slug}`}>
                                                <h4 className="text-2xl text-black hover:text-[#4ce5a2] transition ease-in-out duration-300">{post.title}</h4>
                                            </Link>
                                        </div>
                                        <h6 className="text-gray-500">{post.exercpt}</h6>
                                        <div>
                                            <AuthorAvatarNameLink imgAlt={post.authorName} imgSrc={post.authorImg} link={post.authorSlug} name={post.authorName} textColor="text-[#000000]" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="categories flex-3">
                        <h4 className="text-2xl">Categories</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditorsChoice;
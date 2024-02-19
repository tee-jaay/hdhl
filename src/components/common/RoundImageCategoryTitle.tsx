import Link from "next/link";
import Image from "next/image";
import CategoryNameSlug from "./CategoryNameSlug";

interface Post {
    id: number,
    title: string,
    slug: string,
    category: string,
    categorySlug: string,
    image: string,
}

const posts: Post[] = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        slug: "lorem-ipsum-dolor-sit-amet",
        category: "Technology",
        categorySlug: "technology",
        image: "https://picsum.photos/100?random=1",
    },
    {
        id: 2,
        title: "Consectetur adipiscing elit",
        slug: "consectetur-adipiscing-elit",
        category: "Travel",
        categorySlug: "travel",
        image: "https://picsum.photos/100?random=2",
    },
    {
        id: 3,
        title: "Sed do eiusmod tempor",
        slug: "sed-do-eiusmod-tempor-incididunt",
        category: "Politics",
        categorySlug: "politics",
        image: "https://picsum.photos/100?random=3",
    },
    {
        id: 4,
        title: "Ut labore et dolore",
        slug: "ut-labore-et-dolore-magna-aliqua",
        category: "Sports",
        categorySlug: "sports",
        image: "https://picsum.photos/100?random=4",
    },
];

const RoundImageCategoryTitle = () => {
    return (
        <div className="space-y-6">
            {posts && posts.map((post, _i) => (
                <div className="flex space-x-3" key={post.slug}>
                    <div className="flex-1/5">
                        <div className="w-24 h-24">
                            <Image className="rounded-full" src={post.image} alt="" height={100} width={100} />
                        </div>
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
    );
}

export default RoundImageCategoryTitle;
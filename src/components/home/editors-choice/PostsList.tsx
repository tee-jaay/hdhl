import Link from "next/link";
import Image from "next/image";
import AuthorAvatarNameLink from "@/components/common/AuthorAvatarNameLink";
import CategoryBoxBg from "@/components/common/CategoryBoxBg";

interface Post {
  id: number,
  imgAlt: string,
  imgSrc: string,
  categoryName: string,
  categorySlug: string,
  categoryBgColor: string,
  title: string,
  slug: string,
  excerpt: string,
  authorSlug: string,
  authorName: string,
  authorImg: string,
  date: string,
}

const posts: Post[] = [
  {
    id: 1,
    imgAlt: "Healthy Diet",
    imgSrc: "https://picsum.photos/220/220?q=1",
    categoryName: "Nutrition & Diet",
    categorySlug: "nutrition-and-diet",
    categoryBgColor: "bg-[#574b90]",
    title: "10 Tips for a Healthy Diet",
    slug: "10-tips-for-a-healthy-diet",
    excerpt: "Learn how to make simple changes to your diet to improve your overall health and well-being.",
    authorSlug: "/author/author-name",
    authorName: "Dr. Jane Smith",
    authorImg: "https://i.pravatar.cc/80?q=1",
    date: "March 26, 2022"
  },
  {
    id: 2,
    imgAlt: "Mental Health",
    imgSrc: "https://picsum.photos/220/220?q=2",
    categoryName: "Mental Health",
    categorySlug: "mental-health",
    categoryBgColor: "bg-[#f19066]",
    title: "Coping with Stress and Anxiety",
    slug: "coping-with-stress-and-anxiety",
    excerpt: "Discover effective strategies for managing stress and anxiety in your daily life.",
    authorSlug: "/author/author-name",
    authorName: "Dr. John Doe",
    authorImg: "https://i.pravatar.cc/80?q=2",
    date: "March 26, 2022"
  },
  {
    id: 3,
    imgAlt: "Fitness & Exercise",
    imgSrc: "https://picsum.photos/220/220?q=3",
    categoryName: "Fitness & Exercise",
    categorySlug: "fitness-and-exercise",
    categoryBgColor: "bg-[#3dc1d3]",
    title: "Beginner's Guide to Home Workouts",
    slug: "beginners-guide-to-home-workouts",
    excerpt: "Get started with a simple home workout routine that requires minimal equipment.",
    authorSlug: "/author/author-name",
    authorName: "Sarah Johnson",
    authorImg: "https://i.pravatar.cc/80?q=3",
    date: "March 26, 2022"
  },
  {
    id: 4,
    imgAlt: "Healthy Living",
    imgSrc: "https://picsum.photos/220/220?q=4",
    categoryName: "Healthy Living",
    categorySlug: "healthy-living",
    categoryBgColor: "bg-[#0652DD]",
    title: "Creating a Balanced Lifestyle",
    slug: "creating-a-balanced-lifestyle",
    excerpt: "Learn how to achieve a healthy balance between work, personal life, and self-care.",
    authorSlug: "/author/author-name",
    authorName: "Michael Jones",
    authorImg: "https://i.pravatar.cc/80?q=4",
    date: "March 26, 2022"
  },
  {
    id: 5,
    imgAlt: "Alternative Medicine",
    imgSrc: "https://picsum.photos/220/220?q=5",
    categoryName: "Alternative Medicine",
    categorySlug: "alternative-medicine",
    categoryBgColor: "bg-[#6F1E51]",
    title: "Exploring Natural Remedies",
    slug: "exploring-natural-remedies",
    excerpt: "Discover the benefits and uses of natural remedies for common ailments.",
    authorSlug: "/author/author-name",
    authorName: "Dr. Susan Green",
    authorImg: "https://i.pravatar.cc/80?q=5",
    date: "March 26, 2022"
  },
  {
    id: 6,
    imgAlt: "Probiotics Medicine",
    imgSrc: "https://picsum.photos/220/220?q=5",
    categoryName: "Probiotics Medicine",
    categorySlug: "Probiotics-medicine",
    categoryBgColor: "bg-[#218c74]",
    title: "Exploring Natural Remedies",
    slug: "exploring-natural-remedies",
    excerpt: "Probiotics and Immunity: Strengthening Your Body’s Defense System",
    authorSlug: "/author/author-name",
    authorName: "Dr. Susan Green",
    authorImg: "https://i.pravatar.cc/80?q=6",
    date: "March 26, 2022"
  },
];

const PostsList = () => {
  return (
    <div className="posts space-y-8">
      {posts && posts.map((post, _i) => (
        <div key={post.id} className="post flex space-x-8 bg-[#FFFFFF] pr-8">
          <div className="post_image flex-1/2">
            <Image alt={post.imgAlt} src={post.imgSrc}
              width={220}
              height={220}
            />
          </div>
          <div className="post_info flex-1 space-y-2 py-4">
            <CategoryBoxBg bgColor={post.categoryBgColor} name={post.categoryName} slug={post.categorySlug} />
            <div>
              <Link href={post.slug}>
                <h4 className="text-2xl text-black hover:text-[#4ce5a2] transition ease-in-out duration-300">{post.title}</h4>
              </Link>
            </div>
            <h6 className="text-gray-500">{post.excerpt}</h6>
            <div>
              <AuthorAvatarNameLink imgAlt={post.authorName} imgSrc={post.authorImg} link={post.authorSlug} name={post.authorName} textColor="text-[#000000]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
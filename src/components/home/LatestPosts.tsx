import Link from "next/link";
import AuthorAvatarNameLink from "../common/AuthorAvatarNameLink";
import PublishMonthDateYear from "../common/PublishMonthDateYear";
import CommentsCount from "../common/CommentsCount";
import SectionHeading from "../common/SectionHeading";
import getLatestPosts from "@/_lib/graphQl/queries/getLatestPosts";
import CategoryBoxBg from "../common/CategoryBoxBg";
import formatDate from "@/_helpers/formatPostDate";
import LatestPostsRoundImageList from "../common/LatestPostsRoundImageList";

const latestPosts = async () => {
    // Send the query to the GraphQL API
    const response = await fetch(`${process.env.GRAPHQL_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: getLatestPosts(),
        }),
    });

    // Parse the response body as JSON
    const data = await response.json();
    const { nodes } = data?.data?.posts;

    // Return the posts from the GraphQL API
    return new Response(JSON.stringify(nodes));
}

async function getData() {
    const res = await latestPosts();

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = res.json();
    return data;
}

const LatestPosts = async () => {
    const data = await getData();
    const postsWithoutFirst = data.slice(1);

    return (
        <section className="mx-auto" style={{ width: "1120px" }}>
            <div className="flex space-x-8 ">
                <div className="flex-1">
                    <SectionHeading color={"text-[#000000]"} text={"Latest Posts"} />
                    <div className="hero_left flex-1 bg-no-repeat bg-center" style={{ backgroundImage: `url(${data[0]?.featuredImage?.node?.sourceUrl})`, height: '500px' }}>
                        <div className={`hero_one_item px-12 py-8 flex flex-col justify-end h-full`}>
                            <CategoryBoxBg bgColor={"bg-[#AE0332]"} name={data[0]?.categories?.nodes[0]?.name} slug={data[0]?.categories?.nodes[0]?.slug} />
                            <Link href={data && data[0]?.slug} title={data && data[0]?.title}>
                                <h1 className="title text-3xl text-white font-semibold my-3 hover:text-[#4ce5a2] transition ease-in-out duration-300">{data && data[0]?.title}</h1>
                            </Link>
                            <div className="meta flex space-x-6">
                                <AuthorAvatarNameLink imgAlt={""} imgSrc={"https://i.pravatar.cc/20?q=0"} link={`/author/${data[0]?.author?.node?.slug}`} name={data[0]?.author?.node?.name} textColor={"text-[#FFFFFF]"} />
                                <PublishMonthDateYear color="text-[#FFFFFF]" dateMDY={data && formatDate(data[0]?.date)} />
                                <CommentsCount color="text-[#FFFFFF]" count={data && data[0]?.commentCount} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-80">
                    <span>
                        <Link href={"blog"} className="flex ml-auto w-16 text-sm capitalize py-2 px-2 cursor-pointer text-white bg-black hover:bg-[#4ce5a2] transition ease-in-out duration-300" >
                            view all
                        </Link>
                    </span>
                    <div className="mt-6 ">
                        <LatestPostsRoundImageList posts={postsWithoutFirst} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LatestPosts;
import Link from "next/link";
import AuthorAvatarNameLink from "../common/AuthorAvatarNameLink";
import PublishMonthDateYear from "../common/PublishMonthDateYear";
import CommentsCount from "../common/CommentsCount";
import CategoryBoxBg from "../common/CategoryBoxBg";
import formatDate from "@/_helpers/formatPostDate";

async function getData() {
    const res = await fetch(`${process.env.APP_URL}/api/pages/home`, {
        timeout: 10000
    })

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = res.json();
    return data;
}

const Hero = async () => {
    const data = await getData();

    return (
        <section className="hero flex space-x-6">
            <div className="hero_left flex-1 bg-no-repeat bg-center" style={{ backgroundImage: `url(${data[0]?.featuredImage?.node?.sourceUrl})`, height: '580px' }}>
                <div className={`hero_one_item px-12 py-8 flex flex-col justify-end h-full`}>
                    <CategoryBoxBg bgColor={"bg-[#AE0332]"} name={data[0]?.categories?.nodes[1]?.name} slug={data[0]?.categories?.nodes[1]?.slug} />
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
            <div className="hero_right flex-1 flex-col ">
                <div className={`flex flex-col flex-1 h-1/2 py-10 px-6 bg-no-repeat bg-center justify-end`} style={{ backgroundImage: `url(${data[1]?.featuredImage?.node?.sourceUrl})` }}>
                    <CategoryBoxBg bgColor={"bg-[#378e1c]"} name={data[1]?.categories?.nodes[1]?.name} slug={data[1]?.categories?.nodes[1]?.slug} />
                    <Link href={`/${data && data[1]?.slug}`} title={data && data[1]?.title}>
                        <h2 className="title text-2xl text-white font-semibold my-3 hover:text-[#4ce5a2] transition ease-in-out duration-300">{data && data[1]?.title}</h2>
                    </Link>
                    <div className="meta flex space-x-6">
                        <AuthorAvatarNameLink imgAlt="" imgSrc={"https://i.pravatar.cc/20?q=1"} link={`/author/${data[1]?.author?.node?.slug}`} name={data[1]?.author?.node?.name} textColor="text-[#FFFFFF]" />
                        <PublishMonthDateYear color="text-[#FFFFFF]" dateMDY={data && formatDate(data[1]?.date)} />
                        <CommentsCount color="text-[#FFFFFF]" count={data && data[1]?.commentCount} />
                    </div>
                </div>
                <div className="flex-1 h-1/2 pt-6">
                    <div className="flex space-x-6">
                        <div className={`flex flex-col justify-end text-white flex-1 py-5 px-6 bg-no-repeat bg-center`} style={{ backgroundImage: `url(${data[2]?.featuredImage?.node?.sourceUrl})`, height: '266px' }}>
                            <CategoryBoxBg bgColor={"bg-[#ffa100]"} name={data[2]?.categories?.nodes[1]?.name} slug={data[2]?.categories?.nodes[1]?.slug} />
                            <Link href={`/${data && data[2]?.slug}`} title={`${data && data[2]?.title}`}>
                                <h4 className="title text-2xl text-white font-semibold my-3 hover:text-[#4ce5a2] transition ease-in-out duration-300">{data && data[2]?.title}</h4>
                            </Link>
                            <AuthorAvatarNameLink imgAlt="" imgSrc={"https://i.pravatar.cc/20?q=3"} link={`/author/${data[2]?.author?.node?.slug}`} name={data[2]?.author?.node?.name} textColor="text-[#FFFFFF]" />
                        </div>
                        <div className={`flex flex-col justify-end text-white flex-1 py-5 px-6 bg-no-repeat bg-center`} style={{ backgroundImage: `url("https://picsum.photos/800/600?q=2")` }}>
                            <CategoryBoxBg bgColor={"bg-[#2962ff]"} name={data[3]?.categories?.nodes[0]?.name} slug={data[3]?.categories?.nodes[0]?.slug} />
                            <Link href={`/${data && data[3]?.slug}`} title={`${data && data[3]?.title}`}>
                                <h4 className="title text-2xl text-white font-semibold my-3 hover:text-[#4ce5a2] transition ease-in-out duration-300">{data && data[3]?.title}</h4>
                            </Link>
                            <AuthorAvatarNameLink imgAlt="" imgSrc={"https://i.pravatar.cc/20?q=4"} link={`/author/${data[3]?.author?.node?.slug}`} name={data[3]?.author?.node?.name} textColor="text-[#FFFFFF]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
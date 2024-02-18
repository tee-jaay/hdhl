import Link from 'next/link';
import AuthorAvatarNameLink from '../common/AuthorAvatarNameLink';
import PublishMonthDateYear from '../common/PublishMonthDateYear';
import CommentsCount from '../common/CommentsCount';
import CategoryBoxBg from '../common/CategoryBoxBg';

const Hero = () => {
    return (
        <section className="hero flex space-x-6">
            <div className="hero_left flex-1 bg-no-repeat bg-center" style={{ backgroundImage: `url("https://picsum.photos/1200/800")`, height: '580px' }}>
                <div className={`hero_one_item px-12 py-8 flex flex-col justify-end h-full`}>
                    <CategoryBoxBg bgColor={"bg-[#AE0332]"} name={"Weight Loss"} slug={"weight-loss"} />
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
            <div className="hero_right flex-1 flex-col ">
                <div className={`flex flex-col flex-1 h-1/2 py-10 px-6 bg-no-repeat bg-center justify-end`} style={{ backgroundImage: `url("https://picsum.photos/1200/800?q=0")` }}>
                    <CategoryBoxBg bgColor={"bg-[#378e1c]"} name={"nutrition"} slug={"nutrition"} />
                    <Link href={"/blog/post-slug"} title="Ipsum dolor sit amet consectetur adipisicing elit">
                        <h2 className="title text-2xl text-white font-semibold my-3 hover:text-[#4ce5a2] transition ease-in-out duration-300">Ipsum dolor sit amet consectetur adipisicing elit</h2>
                    </Link>
                    <div className="meta flex space-x-6">
                        <AuthorAvatarNameLink imgAlt="" imgSrc={"https://i.pravatar.cc/20?q=1"} link={"/blog/author/author-slug"} name={"Jon Deo"} textColor="text-[#FFFFFF]" />
                        <PublishMonthDateYear color="text-[#FFFFFF]" dateMDY="March 22, 2022" />
                        <CommentsCount color="text-[#FFFFFF]" count={"15"} />
                    </div>
                </div>
                <div className="flex-1 h-1/2 pt-6">
                    <div className="flex space-x-6">
                        <div className={`flex flex-col justify-end text-white flex-1 py-5 px-6 bg-no-repeat bg-center`} style={{ backgroundImage: `url("https://picsum.photos/800/600?q=1")`, height: '266px' }}>
                            <CategoryBoxBg bgColor={"bg-[#ffa100]"} name={"recipies"} slug={"recipies"} />
                            <Link href={"/blog/post-slug"} title="Repellat reprehenderit error">
                                <h4 className="title text-2xl text-white font-semibold my-3 hover:text-[#4ce5a2] transition ease-in-out duration-300">Repellat reprehenderit error</h4>
                            </Link>
                            <AuthorAvatarNameLink imgAlt="" imgSrc={"https://i.pravatar.cc/20?q=3"} link={"/blog/author/author-slug"} name={"Tania Doe"} textColor="text-[#FFFFFF]" />
                        </div>
                        <div className={`flex flex-col justify-end text-white flex-1 py-5 px-6 bg-no-repeat bg-center`} style={{ backgroundImage: `url("https://picsum.photos/800/600?q=2")` }}>
                            <CategoryBoxBg bgColor={"bg-[#2962ff]"} name={"strength training"} slug={"strength-training"} />
                            <Link href={"/blog/post-slug"} title="Consectetur voluptates modi">
                                <h4 className="title text-2xl text-white font-semibold my-3 hover:text-[#4ce5a2] transition ease-in-out duration-300">Consectetur voluptates modi</h4>
                            </Link>
                            <AuthorAvatarNameLink imgAlt="" imgSrc={"https://i.pravatar.cc/20?q=4"} link={"/blog/author/author-slug"} name={"Maria Doe"} textColor="text-[#FFFFFF]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
import Image from 'next/image';
import Link from 'next/link';

const Hero = ({ fontClassName }: { fontClassName: string }) => {
    return (
        <section className="hero flex space-x-6" style={{ height: '580px' }}>
            <div className="hero_left flex-1 bg-no-repeat bg-center" style={{ backgroundImage: `url("https://picsum.photos/1200/800")`, }}>
                <Link href={"/blog/post-slug"} title="Lorem ipsum dolor sit amet consectetur adipisicing elit">
                    <div className={fontClassName + " hero_one_item px-12 py-8 flex flex-col justify-end h-full"}>
                        <span className="category bg-[#AE0332] text-white px-3 py-1 max-w-max">lifestyle</span>
                        <h1 className="title text-3xl text-white font-semibold mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                        <div className="meta flex space-x-2">
                            <div className="author flex items-center space-x-1">
                                <span>
                                    <Image className="rounded-full" alt="" src={"https://i.pravatar.cc/20"} width={20} height={20} />
                                </span>
                                <span className="text-white">
                                    by Jon Deo
                                </span>
                            </div>
                            <div className="date flex items-center space-x-1">
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <span className="text-white">
                                    March 29, 2022
                                </span>
                            </div>
                            <div className="comments flex items-center space-x-1">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                    </svg>
                                </span>
                                <span className="text-white">
                                    99 Comments
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="hero_right flex-1 flex-col space-y-6 h-96 bg-red-400">
                <div className="flex-1 h-1/2 py-10 bg-no-repeat bg-center" style={{ backgroundImage: `url("https://picsum.photos/1200/800?q=0")` }}>
                    <div className="category">politics</div>
                    <h2 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                    <div className="meta flex">
                        <div className="author">by Jon Deo</div>
                        <div className="date"><span className="icon">icon</span> March 29, 2022</div>
                        <div className="comments">99 Comments</div>
                    </div>
                </div>
                <div className="flex-1 h-1/2">
                    <div className="flex space-x-6">
                        <div className="flex-1 py-5 bg-no-repeat bg-center" style={{ backgroundImage: `url("https://picsum.photos/800/600?q=1")` }}>
                            <div className="category">technology</div>
                            <h4>Repellat reprehenderit eum error</h4>
                            <div className="author">by Jon Deo</div>
                        </div>
                        <div className="flex-1 py-5 bg-no-repeat bg-center" style={{ backgroundImage: `url("https://picsum.photos/800/600?q=2")` }}>
                            <div className="category">travel</div>
                            <h4>consectetur voluptates modi eos hic</h4>
                            <div className="author">by Jon Deo</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
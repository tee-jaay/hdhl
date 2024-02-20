import Link from "next/link";
import LogoWithLink from "@/components/common/LogoWithLink";
import SocialsLinksIcons from "@/components/common/SocialsLinksIcons";

interface Tag {
    name: string,
    slug: string
}

const tags: Tag[] = [
    { name: "Dolore", slug: "dolore", },
    { name: "Technology", slug: "technology" },
    { name: "Molestiae", slug: "molestiae" },
    { name: "Autem", slug: "autem" },
    { name: "Laboriosam", slug: "laboriosam" },
    { name: "Possimus", slug: "possimus" },
    { name: "Distinctio", slug: "distinctio" },
]

const FooterTop = () => {
    return (
        <div className="flex">
            <div>
                <div className="text-white flex space-x-12">
                    <div className="flex-1 logo_desc_follow_us">
                        <div className="flex flex-col">
                            <div className="logo">
                                <LogoWithLink />
                            </div>
                            <div className="desc text-gray-200 my-8">
                                Saepe possimus recusandae suscipit, consequatur, veritatis assumenda.
                            </div>
                            <h5 className="font-semibold text-gray-200 mb-2">Follow Us</h5>
                            <div className="flex pt-3">
                                <SocialsLinksIcons />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 tags_cloud">
                        <h4 className="capitalize text-start font-semibold">tags cloud</h4>
                        <div className="mt-4 grid grid-cols-3 gap-2">
                            {tags && tags.map((tag, i) => (
                                <span className="tag uppercase truncate font-light text-xs py-1 px-2 bg-[#333333]">
                                    <Link key={i} href={`/tags/${tag.slug}`} title={tag.name}>{tag.name}</Link>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 quick_links">
                        <h4 className="capitalize text-start font-semibold">quick links</h4>
                        <div className="mt-4 flex flex-col space-y-1">
                            <span><Link className="capitalize font-light text-sm text-gray-100" href={"/"}>ipsum</Link></span>
                            <span><Link className="capitalize font-light text-sm text-gray-100" href={"/"}>dolor</Link></span>
                            <span><Link className="capitalize font-light text-sm text-gray-100" href={"/"}>sit</Link></span>
                            <span><Link className="capitalize font-light text-sm text-gray-100" href={"/"}>amet</Link></span>
                            <span><Link className="capitalize font-light text-sm text-gray-100" href={"/"}>consectetur</Link></span>
                            <span><Link className="capitalize font-light text-sm text-gray-100" href={"/"}>adipisicing</Link></span>
                        </div>
                    </div>
                    <div className="flex-1 newsletter_subscribe">
                        <h4 className="capitalize text-start font-semibold">newsletter</h4>
                        <div className="flex flex-col mt-4">
                            <h5 className="font-thin">Subscribe to our mailing list to get the new posts</h5>
                            <div className="mt-3">
                                <input className="bg-[#333] text-white py-1 px-2" type="email" placeholder="Enter Your Email" required />
                                <button className="mt-4 bg-[#4DCA93] text-white py-1 px-4 font-light hover:bg-[#333] ease-in-out transition duration-300">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default FooterTop;
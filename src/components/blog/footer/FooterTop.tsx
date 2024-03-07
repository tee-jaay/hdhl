import React from "react";
import Link from "next/link";

import TagProps from "@/_models/TagProps";
import FooterTopProps from "@/_models/FooterTopProps";
import PageProps from "@/_models/PageProps";
import LogoWithLink from "@/components/common/LogoWithLink";
import SocialsLinksIcons from "@/components/common/SocialsLinksIcons";

const TagItem: React.FC<{ tag: TagProps }> = ({ tag }) => <span key={tag.id} className="tag uppercase truncate font-light text-xs py-1 px-2 bg-[#333333]">
    <Link href={`/tags/${tag.slug}/12`} title={tag.name}>{tag.name}</Link>
</span>

const PageItem: React.FC<{ page: PageProps }> = ({ page }) => <span><Link className="capitalize font-light text-sm text-gray-100" href={`/pages/${page.slug}`}>{page.title}</Link></span>

const FooterTop: React.FC<FooterTopProps> = ({ pages, tags, generalSettings }) => {
    return (
        <div className="flex">
            <div>
                <div className="text-white flex space-x-12">
                    <div className="flex-1 logo_desc_follow_us">
                        <div className="flex flex-col">
                            <div className="logo" title={generalSettings?.title}>
                                <LogoWithLink />
                            </div>
                            <div className="desc text-gray-200 my-8">
                                {generalSettings?.description}
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
                            {tags && tags.map((tag, _i) => <TagItem key={tag?.id} tag={tag} />)}
                        </div>
                    </div>
                    <div className="flex-1 quick_links">
                        <h4 className="capitalize text-start font-semibold">quick links</h4>
                        <div className="mt-4 flex flex-col space-y-1">
                            {pages && pages?.map((page, _i) => <PageItem key={page.slug} page={page} />)}
                        </div>
                    </div>
                    <div className="flex-1 newsletter_subscribe">
                        <h4 className="capitalize text-start font-semibold">newsletter</h4>
                        <div className="flex flex-col mt-4">
                            <h5 className="font-thin">Subscribe to our mailing list to get the new posts</h5>
                            <div className="mt-3">
                                <input className="bg-[#333] text-white py-1 px-2" type="email" placeholder="Enter Your Email" required />
                                <button className="mt-4 bg-[#43A047] text-white py-1 px-4 font-light hover:bg-[#333] ease-in-out transition duration-300">Subscribe</button>
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
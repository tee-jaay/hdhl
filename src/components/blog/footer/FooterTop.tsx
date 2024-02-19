import LogoWithLink from "@/components/common/LogoWithLink";
import SocialsLinksIcons from "@/components/common/SocialsLinksIcons";

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
                        <h4 className="capitalize text-start">tags cloud</h4>
                    </div>
                    <div className="flex-1 quick_links">
                        <h4 className="capitalize text-start">quick links</h4>
                    </div>
                    <div className="flex-1 newsletter_subscribe">
                        <h4 className="capitalize text-start">newsletter</h4>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default FooterTop;
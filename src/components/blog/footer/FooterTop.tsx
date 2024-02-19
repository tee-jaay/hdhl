import LogoWithLink from "@/components/common/LogoWithLink";
import SocialsLinksIcons from "@/components/common/SocialsLinksIcons";

const FooterTop = () => {
    return (
        <div className="text-white flex">
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
                <h4 className="capitalize">tags cloud</h4>
            </div>
            <div className="flex-1 quick_links">quick links</div>
            <div className="flex-1 newsletter_subscribe">newsletter</div>
        </div>
    );
}

export default FooterTop;
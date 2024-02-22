import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const PostSocialShareLinks = () => {
    return (
        <div className="share_links flex items-start">
            <h6 className="font-medium mr-4 text-lg text-[#444444]">Share:</h6>
            <div className="social_links flex space-x-3 align-middle">
                <Link href={"/"}>
                    <div className="w-8 h-8 p-2 border">
                        <FontAwesomeIcon color="#444" icon={faFacebookF} />
                    </div>
                </Link>
                <Link href={"/"}>
                    <div className="w-8 h-8 p-2 border">
                        <FontAwesomeIcon color="#444" icon={faXTwitter} />
                    </div>
                </Link>
                <Link href={"/"}>
                    <div className="w-8 h-8 p-2 border">
                        <FontAwesomeIcon color="#444" icon={faInstagram} />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default PostSocialShareLinks;
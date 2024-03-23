import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faPinterestP, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { appName } from "@/_lib/variables/constants";

const SocialShareButtons: React.FC<{ url: string, title: string, media: string }> = ({ url, title, media }) => {
    const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${url}&via=${encodeURIComponent(appName)}`;

    const pinterestHref = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(media)}&description=${encodeURIComponent(title)}`;

    return (
        <div className=" flex space-x-2 items-center justify-items-center">
            <a className="w-6 h-6 border items-center justify-center p-1 text-sm" href={`https://www.facebook.com/sharer.php?u=${url}`} title="Facebook">
                <FontAwesomeIcon color="#666" icon={faFacebookF} />
            </a>
            <a className="w-6 h-6 border items-center justify-center p-1 text-sm" href={twitterHref} title="Twitter">
                <FontAwesomeIcon color="#666" icon={faXTwitter} />
            </a>
            <a className="w-6 h-6 border items-center justify-center p-1 text-sm" href={pinterestHref} title="Pinterest">
                <FontAwesomeIcon color="#666" icon={faPinterestP} />
            </a>
            <a className="w-6 h-6 border items-center justify-center p-1 text-sm" href={`https://api.whatsapp.com/send?text=${title} %0A%0A ${url}`} title="WhatsApp">
                <FontAwesomeIcon color="#666" icon={faWhatsapp} />
            </a>
        </div>
    );
};
export default SocialShareButtons;
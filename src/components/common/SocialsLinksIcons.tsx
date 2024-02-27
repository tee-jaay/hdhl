import { faFacebookF, faLinkedinIn, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import SocialIcon from '@/components/common/SocialIcon';
import SocialIconLinkTitleProps from '@/_models/SocialIconLinkTitleProps';

const socials: SocialIconLinkTitleProps[] = [
    {
        icon: faFacebookF,
        link: "/",
        title: "facebook page id"
    },
    {
        icon: faTwitter,
        link: "/",
        title: "twitter page id"
    },
    {
        icon: faYoutube,
        link: "/",
        title: "youtube page id"
    },
    {
        icon: faPinterest,
        link: "/",
        title: "pinterest page id"
    },
    {
        icon: faLinkedinIn,
        link: "/",
        title: "linked in page id"
    },
];

const SocialsLinksIcons = () => {
    return (
        <div className="socials flex justify-center">
            <div className="flex space-x-4">
                {socials && socials.map((social, i) => (
                    <SocialIcon key={i} icon={social.icon} link={social.link} title={social.title} />
                ))}
            </div>
        </div>
    );
}

export default SocialsLinksIcons;
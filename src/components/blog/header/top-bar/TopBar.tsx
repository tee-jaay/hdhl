import Link from 'next/link';
import { faFacebookF, faLinkedinIn, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import SocialIcon from '@/components/common/SocialIcon';

const TopBar = () => {
    return (
        <div className="topbar bg-[#222] py-2">
            <div className="flex justify-between px-4">
                <div className="latest_news flex-1">
                    <span className="text-sm text-white uppercase">latest article</span>
                    <span className="text-sm text-white mx-3">|</span>
                    <span className="text-sm text-white font-extralight">
                        <Link href={"/"} className="text-gray-300 hover:text-white transition ease-in-out duration-300">
                            Magni accusamus voluptate odit adipisci debitis cupiditate
                        </Link>
                    </span>
                </div>
                <div className="follow_us flex-1 flex items-center justify-end text-gray-200">
                    <span className="text-sm text-gray-400">Follow Us</span>
                    <div className="bg-gray-400 before:content-[''] before:inline-block before:w-12 mx-4" style={{ height: '1.0px' }}></div>
                    <div className="socials flex justify-center">
                        <div className="flex space-x-4">
                            <SocialIcon icon={faFacebookF} link="/" title="facebook page id" />
                            <SocialIcon icon={faTwitter} link="/" title="twitter page id" />
                            <SocialIcon icon={faYoutube} link="/" title="youtube page id" />
                            <SocialIcon icon={faPinterest} link="/" title="pinterest page id" />
                            <SocialIcon icon={faLinkedinIn} link="/" title="linked in page id" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const TopBar = () => {
    return (
        <div className="topbar bg-[#222] py-2">
            <div className="flex justify-between px-4">
                <div className="latest_news flex-1">
                    <span className="text-sm text-white uppercase">Latest News</span>
                    <span className="text-sm text-white mx-3">|</span>
                    <span className="text-sm text-white font-extralight">
                        <Link href={"/"}>
                            Magni accusamus voluptate odit adipisci debitis cupiditate
                        </Link>
                    </span>
                </div>
                <div className="follow_us flex-1 flex items-center justify-end text-gray-200">
                    <span className="text-sm text-gray-400">Follow Us</span>
                    <div className="bg-gray-400 before:content-[''] before:inline-block before:w-12 mx-4" style={{ height: '1.0px' }}></div>
                    <div className="socials flex justify-center">
                        <div className="flex space-x-4">
                            <Link href={"/"} target="_blank" title="facebook page id">
                                <FontAwesomeIcon className="w-3 h-3" icon={faFacebookF} />
                            </Link>
                            <Link href={"/"} target="_blank" title="twitter page id">
                                <FontAwesomeIcon className="w-3 h-3" icon={faTwitter} />
                            </Link>
                            <Link href={"/"} target="_blank" title="youtube page id">
                                <FontAwesomeIcon className="w-3 h-3" icon={faYoutube} />
                            </Link>
                            <Link href={"/"} target="_blank" title="pinterest page id">
                                <FontAwesomeIcon className="w-3 h-3" icon={faPinterest} />
                            </Link>
                            <Link href={"/"} target="_blank" title="linkedin page id">
                                <FontAwesomeIcon className="w-3 h-3" icon={faLinkedinIn} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
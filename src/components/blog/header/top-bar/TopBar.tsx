import Link from 'next/link';
import SocialsLinksIcons from '@/components/common/SocialsLinksIcons';

const TopBar = () => {
    return (
        <section className="topbar bg-[#222] py-2">
            <div className="flex justify-between mx-auto" style={{ width: "1024px" }}>
                <div className="latest_news flex-1">
                    <span className="text-sm text-white uppercase">latest article</span>
                    <span className="text-sm text-white mx-3">|</span>
                    <span className="text-sm text-white font-normal">
                        <Link href={"/magni-accusamus-voluptate-odit-adipisci"} className="text-gray-300 hover:text-white transition ease-in-out duration-300">
                            Magni accusamus voluptate odit adipisci
                        </Link>
                    </span>
                </div>
                <div className="follow_us flex-1 flex items-center justify-end text-gray-200">
                    <span className="text-sm text-gray-400">Follow Us</span>
                    <div className="bg-gray-400 before:content-[''] before:inline-block before:w-12 mx-4" style={{ height: '1.0px' }}></div>
                    <SocialsLinksIcons />
                </div>
            </div>
        </section>
    );
}

export default TopBar;
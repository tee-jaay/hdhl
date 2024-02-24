import Link from 'next/link';

import gqlQuery from '@/_lib/graphQl/gqlQuery';
import getLatestPosts from '@/_lib/graphQl/queries/getLatestPosts';
import SocialsLinksIcons from '@/components/common/SocialsLinksIcons';

const getData = async () => {
    // Construct the query and variables
    const query = getLatestPosts();
    const variables = {
        limit: 1,
    };
    try {
        // Make the request and return the data
        const data = await gqlQuery(query, variables);
        return data?.posts?.nodes;
    } catch (error) {
        // Handle the error here
        console.error(error);
        throw error;
    }
}

const TopBar = async () => {
    const data = await getData();
    return (
        <section className="topbar bg-[#222] py-2">
            <div className="flex justify-between mx-auto" style={{ width: "1024px" }}>
                <div className="latest_news flex-1">
                    <span className="text-sm text-white uppercase">latest article</span>
                    <span className="text-sm text-white mx-3">|</span>
                    <span className="text-sm text-white font-normal">
                        <Link href={`/${data[0]?.slug}`} className="text-gray-300 hover:text-white transition ease-in-out duration-300">
                            {data[0]?.title}
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
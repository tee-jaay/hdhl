import Link from 'next/link';
import SocialsLinksIcons from '@/components/common/SocialsLinksIcons';
import getLatestPosts from '@/_lib/graphQl/queries/getLatestPosts';

const latestPosts = async () => {
    // Send the query to the GraphQL API
    const response = await fetch(`${process.env.GRAPHQL_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: getLatestPosts(),
        }),
    });

    // Parse the response body as JSON
    const data = await response.json();
    const { nodes } = data?.data?.posts;

    // Return the posts from the GraphQL API
    return new Response(JSON.stringify(nodes));
}

async function getData() {
    const res = await latestPosts();

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = res.json();
    return data;
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
                        <Link href={data[0]?.slug} className="text-gray-300 hover:text-white transition ease-in-out duration-300">
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